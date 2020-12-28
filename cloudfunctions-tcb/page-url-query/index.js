const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
    const {
        type = null
    } = event
    console.log('传递的参数', event)
    const collection = db.collection('page-url')
    const res = await collection.where({
        type
    }).get()
	
    return res
}
 