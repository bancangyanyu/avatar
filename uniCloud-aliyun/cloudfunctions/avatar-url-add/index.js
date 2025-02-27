'use strict'
const db = uniCloud.database()
exports.main = async (event, context) => {
    const collection = db.collection('img')
    const {id} = event
    if(id){
        const imglist = await collection.limit(1).get()
        if (!imglist.data || imglist.data.length === 0) {
            return {
                status: -1,
                msg: '集合unicloud-test内没有数据'
            }
        } 
        const res = await collection.doc(id).update(event)
        if (res.updated === 1) {
            const result = Object.assign({}, {
                _id: id
            }, event)
            return { 
                status: 0,
                msg: `集合第一条数据由${JSON.stringify(imglist.data[0])}修改为${JSON.stringify(result)}`
            }
        } else {
            return {
                status: -1,
                msg: `集合unicloud-test内没有数据`
            }
        }
    }else{
        const res = await collection.add(event)
        return res
    }
   
}
