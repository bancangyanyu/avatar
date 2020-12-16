'use strict'
const db = uniCloud.database()
exports.main = async (event, context) => {
    //event为客户端上传的参数
    console.log('event : ', event)
    const collection = db.collection('news-articles')
    const res = await collection.limit(100).get()
    return res
}
