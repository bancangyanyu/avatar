'use strict'
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
    const {
        _id = 1
    } = event
    console.log('传递的参数', event)
    const collection = db.collection('news-articles')
    const res = await collection.where({
        _id: _id
    }).get()
    return res
}
