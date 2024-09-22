// gsap.to('#box',{
//     x:'100%',
//     duration: 1,
//     delay:2,
//     rotate:360,
//     backgroundColor: 'aqua',
//     yoyo:true,
//     repeat: '-1'
// })


// gsap.from('#box2',{
//     x:'100%',
//     duration:1,
//     delay:2,
//     rotate:360,
//     backgroundColor:'red'
// })


// gsap.to('#box3',{
//     x:1000,
//     duration:2,
//     delay:2,
//     repeat:'-1',
//     yoyo:true,
//     backgroundColor: 'pink'
// })


// gsap.from('h1',{
//     opacity:0,
//     delay:'0.5',
//     duration:'0.5',
//     y:30,
//     stagger:1
// })


let tl = gsap.timeline()

tl.to('#box4',{
    x:1000,
    duration:2,
    delay:1,
    opacity: '0.1'
})

tl.to('#box5',{
    x:1000,
    duration:2,
    opacity: '0.1'
})

tl.to('#box6',{
    x:1000,
    duration:2,
    opacity: '0.1'
})
