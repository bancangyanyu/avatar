'use strict'

const axios = require('axios'); 
const cheerio = require('cheerio')
// 0最新 1 男头 2 女头 3 情头 4 "动漫" 5 "欧美" 6"搞怪" 7文字 8可爱 9萌宠 10 fufu 11气质
let imgIndex = 0
const db = uniCloud.database()
const collection = db.collection('img')
const img_id = 4   
// const htmlClass = '.g-gx-detail p img' 
    const htmlClass = '.album-content .mbpho img'  
const imgArr = []   
exports.main = async (event, context) => {   
	// const targetURL = `https://www.qqtn.com/article/article_341606_1.html`    
	const targetURL = `https://www.duitang.com/album/?id=99447712`     
	const res = await uniCloud.httpclient.request(targetURL, {            
		method: 'GET',          
		dataType: 'text' // 指定返回值为json格式，自动进行parse    
	}).catch(err => {  
	    console.log(err); 
	}) 
	const html = res.data
	 console.log("html",html);
	 console.log("typeof",typeof(html)); 
	 const $ = cheerio.load(html)
	 const list = $(htmlClass)  
	 console.log("list",$); 
	 const imgList = [
	     // 'http://img.touxiangwu.com/uploads/allimg/200312/-1_03121111264P1.jpg',
	 ]
	 const time = new Date().getTime()
	for (let i = 0; i < list.length; i++) {
	    const href = list.eq(i).attr('src') 
	    console.log('href',href) 
	    const img = {
	        img_id:img_id,
	        img_url:href,
			time
	    }
		imgIndex ++
	    imgArr.push(img) 
	    const res = await collection.add(img) 
	} 
	console.log(imgIndex)
	console.log('新增图片：',JSON.stringify(imgArr))
	console.log('imgIndex',imgIndex)
    return event
}

