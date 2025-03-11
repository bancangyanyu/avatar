export const range = (start, end, step) => {
    return Array.from(Array.from(Array(Math.ceil((end - start) / step)).keys()), x => start + x * step)
}

export const AvatarUrl = { 
    1:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.11oulcktni1c.png',
    2:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.56he1ki5ow80.png',
    3:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/132c10d0ad5892337b3efcc9ec61d810.ymypbcth41s.jpg',
    4:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.6psq51vaw340.png',
    5:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.1n9tuq9fvp40.png'
}

export const  PageUrl = { 
    1:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/page-bg.6aedgewuw5c0.png',
    2:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.bvg4p8lg6bs.jpg',
    3:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/timg (2).4zcatk1z7g00.jpg',
    4:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.28o0j23ifsg0.jpg',
    5:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/530f7e4127322aae86930975617352b7.3eg5fhdx0pk0.png'
}

export const fabList = [
    {iconPath:'/static/tabbar/back.png',selectedIconPath:'/static/tabbar/back_cur.png',text:'返回',active:true},
    {iconPath:'/static/tabbar/image_cur.png',selectedIconPath:'/static/tabbar/image_cur.png',text:'头像',}
]

export const canvasSize = {
    cansWidth:270,
    cansHeight:270
}