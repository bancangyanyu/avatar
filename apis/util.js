export const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}

export const getDay = (time) => {
	const date = new Date(time)
	const year = date.getFullYear()
	const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
	const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
	return year + '-' + month + '-' + day
}

export const fileSize = (value) => {
	if (null == value || value == '') {
		return '0 Bytes'
	}
	const unitArr = new Array('Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
	const index = 0
	const srcsize = parseFloat(value)
	index = Math.floor(Math.log(srcsize) / Math.log(1024))
	const size = srcsize / Math.pow(1024, index)
	size = size.toFixed(2)
	return size + unitArr[index]
}

// 使用 let fmtDate = formatDatetime(date, 'yyyy-MM-dd hh:mm:ss')
export const formatDatetime = (date, fmt) => {
	date = new Date(date)
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
	}

	const obj = {
		'M+': date.getMonth() + 1,
		// 'd+': date.getDay(),
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	}
	console.log(obj)
	for (const key in obj) {
		if (new RegExp(`(${key})`).test(fmt)) {
			const str = obj[key] + ''
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
		}
	}
	return fmt
}

export const padLeftZero = (str) => {
	return ('00' + str).substr(str.length)
}
//数组排序
export const compare = function(property) {
	return function(a, b) {
		const value1 = a[property]
		const value2 = b[property]
		return value1 - value2
	}
}

export const getUrlParam = (name) => {
	const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
	const r = window.location.search.substr(1).match(reg)
	if (r != null) {
		return unescape(r[2])
	}
	return null
}
export const back = (config) => {
	const prevPageData = config.prevPageData
	const delta = config.delta || 1
	if (prevPageData) {
		const pages = getCurrentPages()
		const prevPage = pages[pages.length - (delta + 1)]
		prevPage.setData(config.prevPageData)
	}
	return uni.navigateBack(config)
}

export const msg = (title, duration = 1500, mask = false, icon = 'none') => {
	//统一提示方便全局修改
	if (Boolean(title) === false) {
		return
	}
	return new uni.showToast({
		title,
		duration,
		mask,
		icon,
	})
}

export const getRandom = () => {
	let d = new Date().getTime()
	if (window.performance && typeof window.performance.now === 'function') {
		d += performance.now() //use high-precision timer if available
	}
	const uuid = 'xxxxxxxx_x2xx_13xxx_xxx'.replace(/[xy]/g, function(c) {
		let r = (d + Math.random() * 16) % 16 | 0
		d = Math.floor(d / 16)
		return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16)
	})
	return uuid
}

export const setupAppUpdateListener = () => {
	let updateManager = null
	if (wx.getUpdateManager) {
		updateManager = wx.getUpdateManager()
	} else {
		return
	}

	updateManager.onCheckForUpdate(function(res) {

	})

	updateManager.onUpdateReady(function() {
		wx.showModal({
			title: '更新提示',
			content: '新版本已经准备好，是否重启应用？',
			confirmText: '重 启',
			showCancel: false,
			success: function(res) {
				if (res.confirm) {
					// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
					updateManager.applyUpdate()
				}
			}
		})
	})

	updateManager.onUpdateFailed(function() {
		// 新的版本下载失败
		//console.error("新的版本下载失败！");
	})
}

// 身份证/驾驶证校验
// export const checkUseId = (code) => {

// 	let city = {
// 		11: "北京",
// 		12: "天津",
// 		13: "河北",
// 		14: "山西",
// 		15: "内蒙古",
// 		21: "辽宁",
// 		22: "吉林",
// 		23: "黑龙江 ",
// 		31: "上海",
// 		32: "江苏",
// 		33: "浙江",
// 		34: "安徽",
// 		35: "福建",
// 		36: "江西",
// 		37: "山东",
// 		41: "河南",
// 		42: "湖北 ",
// 		43: "湖南",
// 		44: "广东",
// 		45: "广西",
// 		46: "海南",
// 		50: "重庆",
// 		51: "四川",
// 		52: "贵州",
// 		53: "云南",
// 		54: "西藏 ",
// 		61: "陕西",
// 		62: "甘肃",
// 		63: "青海",
// 		64: "宁夏",
// 		65: "新疆",
// 		71: "台湾",
// 		81: "香港",
// 		82: "澳门",
// 		91: "国外 "
// 	};
// 	let tip = "";
// 	let pass = true;

// 	if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
// 		tip = "身份证号格式错误";
// 		pass = false;
// 	} else if (!city[code.substr(0, 2)]) {
// 		tip = "地址编码错误";
// 		pass = false;
// 	} else {
// 		//18位身份证需要验证最后一位校验位
// 		if (code.length == 18) {
// 			code = code.split('');
// 			//∑(ai×Wi)(mod 11)
// 			//加权因子
// 			let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
// 			//校验位
// 			let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
// 			let sum = 0;
// 			let ai = 0;
// 			let wi = 0;
// 			for (let i = 0; i < 17; i++) {
// 				ai = code[i];
// 				wi = factor[i];
// 				sum += ai * wi;
// 			}
// 			let last = parity[sum % 11];
// 			if (parity[sum % 11] != code[17]) {
// 				tip = "校验位错误";
// 				pass = false;
// 			}
// 		}
// 	}
// 	if (!pass) {
// 		this.$msg('格式不對')
// 	};
// 	return pass;
// }



// 手机号
export const checkMobile = (mobile) => {
	return RegExp(/^1[34578]\d{9}$/).test(mobile)
}

export const checkLicense = (str) => {
	return RegExp(
		// /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/
	/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/	
	).test(str)
}
export const checkCarNo = (str) => {
	return RegExp(
		/^([京津晋冀蒙辽吉黑沪苏浙皖闽赣鲁豫鄂湘粤桂琼渝川贵云藏陕甘青宁新][ABCDEFGHJKLMNPQRSTUVWXY][1-9DF][1-9ABCDEFGHJKLMNPQRSTUVWXYZ]\d{3}[1-9DF]|[京津晋冀蒙辽吉黑沪苏浙皖闽赣鲁豫鄂湘粤桂琼渝川贵云藏陕甘青宁新][ABCDEFGHJKLMNPQRSTUVWXY][\dABCDEFGHJKLNMxPQRSTUVWXYZ]{5})$/
	).test(str)
}
export const getImgSrc = (htmlstr) => {
	let reg = /<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/gim
	let imgsrcArr = []
	while (tem = reg.exec(htmlstr)) {
		imgsrcArr.push(tem[2])
	}
	return imgsrcArr
}
// module.exports = {
//     msg,
//     back,
//     getDay,
//     fileSize,
//     formatDatetime,
//     compare,
//     getRandom,
//     getUrlParam,
//     setupAppUpdateListener,
//     checkMobile,
//     getImgSrc,
//     checkCarNo
// }
