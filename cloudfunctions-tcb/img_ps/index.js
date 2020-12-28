'use strict'

const request = require('sync-request')
const cheerio = require('cheerio')
const Entities = require('html-entities').XmlEntities
const entities = new Entities()
// 1 漫头 2 男头 3 女头 4 "气质" 5 "小清新" 6 "情头" 7 古风" 8文字 9 黑白 10 小孩 11 动物
let imgIndex = 2
const db = uniCloud.database()
const collection = db.collection('img')
// const dbCmd = db.command
const img_id = 11
const htmlClass = '.g-box-1200 .g-img-list1'

const imgArr = [] 
exports.main = async (event, context) => {
    for (let i = imgIndex; i < 10; i++) { 
        const host = `http://www.touxiangwu.com/touxiang/dongwu/index_${i}.html`
        const html = request('GET', host).getBody().toString()
        const $ = cheerio.load(html)
        const list = $(htmlClass).find('img')
        const imgList = [
            'http://img.touxiangwu.com/uploads/allimg/200312/-1_03121111264P1.jpg',
        ]
	   for (let i = 0; i < list.length; i++) {
	       const href = list.eq(i).attr('src')
	       console.log('href',href)
	       const img = {
	           img_id:img_id,
	           img_url:href
	       }
	       imgArr.push(img)
	       const res = await collection.add(img)
	   } 
	   imgIndex ++
	   console.log(imgIndex)
    } 
    console.log('新增图片：',JSON.stringify(imgArr))
    console.log('imgIndex',imgIndex)
    return event
}

