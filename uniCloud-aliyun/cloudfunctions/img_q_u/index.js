const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
    const {
        type = null
    } = event
    console.log('传递的参数', event)
    const collection = db.collection('img')
    const res = await collection.where({
        img_id:8
    }).limit(999999).get()
    console.log('长度',JSON.stringify(res.data.length))
    console.log(JSON.stringify(res))
    for(let i=0;i<res.data.length;i++){
        const item = res.data[i]
        const data = await collection.doc(item._id).update({img_id:3})
        console.log(i)
    }
    return res
}
 