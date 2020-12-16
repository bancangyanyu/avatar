export const range = (start, end, step) => {
    return Array.from(Array.from(Array(Math.ceil((end - start) / step)).keys()), x => start + x * step)
}

export const AvatarUrl = { 
    1:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.11oulcktni1c.png',
    2:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.56he1ki5ow80.png',
    3:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/132c10d0ad5892337b3efcc9ec61d810.ymypbcth41s.jpg',
    4:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.6psq51vaw340.png'
}

export const  PageUrl = { 
    1:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/page-bg.6aedgewuw5c0.png',
    2:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.bvg4p8lg6bs.jpg',
    3:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/timg (2).4zcatk1z7g00.jpg',
    4:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.28o0j23ifsg0.jpg',
    5:'https://cdn.jsdelivr.net/gh/bancangyanyu/image_cdn@main/image/xxx.2eqeolh63tes.jpg'
}

