var crsr = document.querySelector("#cursor");
var crsrblur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left =dets.x+20 +"px"
    crsr.style.top =dets.y  +"px"
    crsrblur.style.left =dets.x -220 +"px"    
    crsrblur.style.top =dets.y -220 +"px"    

})

// var h4all = document.querySelectorAll("#nav h4");
// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         crsr.style.scale = 3
//         crsr.style.border = "1px solid #fff"
//         crsr.style.backgroundColor = "transparent"
//     })
//     elem.addEventListener("mouseleave",function(){
//         crsr.style.scale = 1
//         crsr.style.border = "1px solid #95c11e"
//         crsr.style.backgroundColor = "#95c11e"
//     })
// })
var h4all = document.querySelectorAll("body h4, h2, h1, h3, h5,img");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "1px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })
})


gsap.to("#nav",{
    backgroundColor :"#000",
    duration:0.5,
    height:"110px",  
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,

    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -22%",
        end:"top -72%",
        // markers:true,
        scrub:2,
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }

})
gsap.from("#cards-container",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#cards-container",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }

})
// gsap.from("#cards-container",{
//     y:50,
//     opacity:0,
//     duration:1,
//     // stagger:0.4,
//     scrollTrigger:{
//         trigger:"#cards-container",
//         scroller:"body",
//         start:"top 70%",
//         end:"top 65%",
//         scrub:4,
//     }

// })

gsap.from("#colone1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colone1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:5,

    }
})
gsap.from("#colone2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colone1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:5,

    }
})
gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub: 1,

    }
})
