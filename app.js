const threeDot = document.querySelector('nav svg');

threeDot.addEventListener('click', () => {
    if(threeDot.classList.contains('active')){
        gsap.to('.link',{x:'100%'})
        gsap.to('.line',{fill: 'white'})
        gsap.set('body',{overflow:'auto'})
        gsap.set('body',{overflowX: "hidden"})

    }else{
        gsap.to('.link',{x:'0%'})
        gsap.to('.line',{fill: 'black'})
        gsap.fromTo('.link a',{opacity: 0, y:0},
        {opacity: 1, y:20, delay: 0.7, stagger: 0.28})
        gsap.set('body',{overflow:'hidden'})
    }
    threeDot.classList.toggle("active");
})

const videos = gsap.utils.toArray('.video')
gsap.set(videos,{opacity: 0})

videos.forEach(video => {
    ScrollTrigger.create({
        trigger:video,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
            gsap.to(video,{opacity: 1});
            video.play();
        },
        onEnterBack: () => video.play(),
        onLeave: () => video.pause(),
        onLeaveBack: () => video.pause(),
    })
})