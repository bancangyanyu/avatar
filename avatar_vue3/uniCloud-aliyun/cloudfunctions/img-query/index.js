'use strict'
const db = uniCloud.database()
exports.main = async (event, context) => {
    //event为客户端上传的参数
    console.log('event : ', event)
	const { pageType='img' } = event
	const descName = pageType==='img' ? 'time': '_id' 
    const collection = db.collection(pageType) 
    const filter = {
		img_id:event.img_id
	}//筛选条件，默认为空，格式 {key:'values'}
    const pageNum = event.pageNum ? event.pageNum : 1 //当前第几页，默认为第一页
    const pageSize = event.pageSize ? event.pageSize : 10 //每页取多少条记录，默认为10条  
    const {
        img_id 
    } = filter  
    const countResult = await collection.where(filter).count() //获取集合中的总记录数
    const total = img_id === 0 ? 40 : countResult.total //得到总记录数 
    const totalPage = Math.ceil(total / pageSize) //计算页数
    let hasMore = false //提示前端是否还有数据
    if (pageNum > totalPage || pageNum == totalPage) { //如果没有数据了，就返回false
        hasMore = false
    } else {
        hasMore = true
    }
    console.log('筛选请求的数据', [filter, total])

    const res = img_id !== 0 ? await collection.where(filter).orderBy(descName, 'desc').skip((pageNum - 1) * pageSize).limit(pageSize).get() :
        await collection
            .aggregate()
            .sample({
                size: 20
            })
			.sort({
				time:-1
			})
            .end()
		
    res.hasMore = hasMore
    //查询数据并返回给前端
    return res
}
