// gsap.from('#page1 #box', {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })

// gsap.from('#page2 #box', {
//     scale: 0,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: '#page2 #box',
//         scroller: "body",
//         markers: true, // add markers
//         start: 'top 60%' // this will trigger the animation when the scroll is reached 60% from top and not after full scroll
//     }
// })


// gsap.from('#page3 #box', {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })

// ###########################################################################################################


// gsap.from('#page2 #box', {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     rotate: 720,
//     scrollTrigger: {
//         trigger: '#page2 #box',
//         markers: true,
//         start: 'top 60%',
//         end: 'top 30%',
//         scrub: 3, //animation totally based on scrolling
//         pin: true, // it will pin the element
//     }
// })

// ###########################################################################################################

gsap.to('#section2 #heading', {
    transform: 'translateX(-180%)',
    scrollTrigger: {
        trigger: '#section2',
        scroller: 'body',
        markers: true,
        start: 'top 0%',
        end: "top -100%",
        scrub: 2,
        pin: true
    }

})