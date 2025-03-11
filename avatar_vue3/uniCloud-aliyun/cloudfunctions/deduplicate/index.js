'use strict';
// 云函数入口文件
const db = uniCloud.database();
const imgs = db.collection('img'); // 替换为你的集合名称

exports.main = async (event, context) => {
  const fieldName = 'img_url'; // 需要去重的字段名
  const $ = db.command.aggregate;
  const dbCmd = db.command;

  // 聚合查询：按字段值分组，统计每组的记录数，并保留每组的第一条数据
  const res = await imgs.aggregate()
    .group({
      _id: `$${fieldName}`, // 按指定字段分组
      num: $.sum(1), // 统计每组的记录数
      first: $.first('$_id') // 保留每组的第一条数据
    })
    .end();
 
  // 获取需要保留的数据 ID
  const idsToKeep = res.data.map(item => item.first);
  console.log('保留的数据 ID:', res,idsToKeep);

  // 删除除保留数据外的其他重复数据
  const deleteResult = await imgs.where({
    _id: dbCmd.nin(idsToKeep) // 删除不在保留列表中的数据
  }).remove();

  console.log('删除结果:', deleteResult);

  return {
    success: true,
    deletedCount: deleteResult.deletedCount, // 删除的数据条数
    remainingCount: idsToKeep.length // 保留的数据条数
  };
};