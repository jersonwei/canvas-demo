// 获取画板
let canvas = document.getElementById('canvas')
// 获取直线按钮
let huabi = document.getElementById('huabi')
// 矩形按钮
let rect = document.getElementById('rect')
// 圆形按钮
let yuan = document.getElementById('yuan')
// 橡皮擦按钮
let xiangpi = document.getElementById('clean')
// 超细画笔
let skin = document.getElementById('skin')
// 默认画笔
let xi = document.getElementById('xi')
// 正常画笔
let normal = document.getElementById('normal')
// 粗画笔
let cu = document.getElementById('cu')
// 颜色
let inputcolor = document.getElementById('input')
// 刷新页面按钮
let cleanbtn = document.getElementById('del')
// 图片下载按钮
let download = document.getElementById('download')
// 所有的画笔粗细按钮
let allspan = document.querySelectorAll('span')

let allbtn = document.querySelectorAll('.btn')

let ctx = canvas.getContext('2d')
// 设置画布的宽高
canvas.setAttribute('width', canvas.offsetWidth)

canvas.setAttribute('height', canvas.offsetHeight)

let huaban = {
    // 设置功能事件
    type: 'huabi',
    // 判断是否能开始绘制
    isDraw: false,
    // 存储图像数据
    ImageData: null,
    // 画笔的开始位置
    beginX: 0,
    beginY: 0,
    // 默认线段宽度
    linewidth: 4,
    // 默认颜色
    Color: 'black',
    // 圆点函数
    huabiFn: function (e) {
        let x = e.pageX - canvas.offsetLeft
        let y = e.pageY - canvas.offsetTop
        ctx.lineTo(x, y)
        ctx.lineWidth = huaban.linewidth
        ctx.lineCap = 'round'
        ctx.strokeStyle = huaban.Color
        ctx.lineJoin = 'round'
        ctx.stroke()
    },
    // 矩形函数
    rectFn: function (e) {
        let x = e.pageX - canvas.offsetLeft
        let y = e.pageY - canvas.offsetTop
        // 清空画布
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

        // 跳过第一次设置
        if (huaban.ImageData != null) {
            // 将上次的图像数据再次加载到画布中
            // 第一个参数为画像数据，后面两个参数为画板起始位置，后面两个为图像起始位置
            // 在后面两个参数为画布宽高

            ctx.putImageData(huaban.ImageData, 0, 0, 0, 0, canvas.offsetWidth, canvas.offsetHeight)
        }

        ctx.beginPath()

        ctx.lineWidth = huaban.linewidth
        ctx.strokeStyle = huaban.Color
        ctx.rect(huaban.beginX, huaban.beginY, x - huaban.beginX, y - huaban.beginY)
        ctx.stroke()
        ctx.closePath()
    },
    // cleanFn: function () {
    //     ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
    // },
    // 圆形函数
    yuanFn: function (e) {
        // 确认当前的鼠标坐标
        let x = e.pageX - canvas.offsetLeft
        let y = e.pageY - canvas.offsetTop
        // 清空画布
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

        // 跳过第一次设置
        if (huaban.ImageData != null) {
            // 将上次的图像数据再次加载到画布中
            // 第一个参数为画像数据，后面两个参数为画板起始位置，后面两个为图像起始位置
            // 在后面两个参数为画布宽高
            ctx.putImageData(huaban.ImageData, 0, 0, 0, 0, canvas.offsetWidth, canvas.offsetHeight)
        }

        ctx.beginPath()

        ctx.strokeStyle = huaban.Color
        ctx.lineWidth = huaban.linewidth
        ctx.arc(huaban.beginX, huaban.beginY, Math.abs((x - huaban.beginX) / 2), 0, 2 * Math.PI, true ||
            false)
        ctx.stroke()
        ctx.closePath()
        // console.log(123)
    },
    xiangpiFn: function (e) {

        let x = e.pageX - canvas.offsetLeft

        let y = e.pageY - canvas.offsetTop

        // 清空画布
        // ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

        // // 跳过第一次设置
        // if (huaban.ImageData != null) {
        //     // 将上次的图像数据再次加载到画布中
        //     // 第一个参数为画像数据，后面两个参数为画板起始位置，后面两个为图像起始位置
        //     // 在后面两个参数为画布宽高
        //     ctx.putImageData(huaban.ImageData, 0, 0, 0, 0, canvas.offsetWidth, canvas.offsetHeight)
        // }
        // ctx.beginPath()

        ctx.clearRect(huaban.beginX, huaban.beginY, x - huaban.beginX,y - huaban.beginY)

        // ctx.stroke()    

        // ctx.closePath()
    }
}

// 圆点事件
huabi.onclick = function () {
    // 排他清空属性
    allbtn.forEach(function (item, i) {
        item.classList.remove('active')
    })
    this.classList.add('active')
    huaban.type = 'huabi'
}

// 矩形事件
rect.onclick = function () {
    // 排他清空属性
    allbtn.forEach(function (item, i) {
        item.classList.remove('active')
    })
    this.classList.add('active')
    huaban.type = 'rect'
}


// 圆形事件
yuan.onclick = function () {
    // 排他清空属性
    allbtn.forEach(function (item, i) {
        item.classList.remove('active')
    })
    this.classList.add('active')
    huaban.type = 'yuan'
}

// 橡皮擦事件
xiangpi.onclick = function () {
    // 排他清空属性
    allbtn.forEach(function (item, i) {
        item.classList.remove('active')
    })
    this.classList.add('active')
    huaban.type = 'xiangpi'
}

// 画笔粗细事件
skin.onclick = function () {
    allspan.forEach(function (item, i) {
        item.removeAttribute('class', 'select')
    })
    this.setAttribute('class', 'select')
    huaban.linewidth = 1
}
xi.onclick = function () {
    allspan.forEach(function (item, i) {
        item.removeAttribute('class', 'select')
    })
    this.setAttribute('class', 'select')
    huaban.linewidth = 4
}
normal.onclick = function () {
    allspan.forEach(function (item, i) {
        item.removeAttribute('class', 'select')
    })
    this.setAttribute('class', 'select')
    huaban.linewidth = 10
}
cu.onclick = function () {
    allspan.forEach(function (item, i) {
        item.removeAttribute('class', 'select')
    })
    this.setAttribute('class', 'select')
    huaban.linewidth = 14
}

// 监听颜色设置事件

inputcolor.onchange = function (e) {
    huaban.Color = inputcolor.value
    // console.log(inputcolor.value)
}


// 清空画板事件
cleanbtn.onclick = function () {
    // huaban.type = 'cleanFn'
    location.reload()

    // huaban['cleanFn']()
}

// 下载图片事件
download.onclick = function () {
    let url = canvas.toDataURL()
    let aDOM = document.createElement('a')
    aDOM.setAttribute('href', url)
    aDOM.setAttribute('download', download)
    aDOM.style.opacity = 0
    this.appendChild(aDOM)
    aDOM.click()
}

// 监听鼠标按下事件
canvas.onmousedown = function (e) {
    huaban.isDraw = true
    if (huaban.type == 'rect') {
        // 记录鼠标按下的坐标
        let x = e.pageX - canvas.offsetLeft
        let y = e.pageY - canvas.offsetTop
        // 赋值为画笔的坐标
        huaban.beginX = x
        huaban.beginY = y
        // console.log(huaban.beginX,huaban.beginY)
    } else if (huaban.type == 'huabi') {
        let x = e.pageX - canvas.offsetLeft
        let y = e.pageY - canvas.offsetTop
        // 赋值为画笔的坐标
        huaban.beginX = x
        huaban.beginY = y
        // console.log(huaban.beginX,huaban.beginY)
        ctx.beginPath()
        ctx.moveTo(x, y)
    } else if (huaban.type == 'yuan') {
        // 记录鼠标按下的坐标
        let x = e.pageX - canvas.offsetLeft
        let y = e.pageY - canvas.offsetTop
        // 赋值为画笔的坐标
        huaban.beginX = x
        huaban.beginY = y
        // console.log(huaban.beginX,huaban.beginY)
     } else if (huaban.type == 'xiangpi') {
        let x = e.pageX - canvas.offsetLeft
        let y = e.pageY - canvas.offsetTop

        huaban.beginX = x
        huaban.beginY = y
    }

}
// 监听鼠标抬起事件
canvas.onmouseup = function () {
    // 存储每次画完的图像数据
    huaban.ImageData = ctx.getImageData(0, 0, canvas.offsetWidth, canvas.offsetHeight)
    huaban.isDraw = false

    if (huaban.type == 'huabi') {
        ctx.closePath()
    }
}

// 监听鼠标移动事件

canvas.onmousemove = function (e) {
    if (huaban.isDraw) {
        let strFn = huaban.type + 'Fn'
        huaban[strFn](e)
    }
}