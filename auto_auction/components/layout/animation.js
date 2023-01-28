import { gsap } from "gsap";
const loadPageTl = gsap.timeline();
const leavePageTl = gsap.timeline();


export function animLoadPage() {
    loadPageTl.to(".app",{
        opacity: 1,
        duration: .5,
    })
    loadPageTl.to(".header__container",{
        opacity: 1,
        duration: .5,
        y: 0,
        delay: .2
    },"<")
    loadPageTl.to(".header__menu_item",{
        opacity: 1,
        duration: .5,
        stagger: .2,
    })
    loadPageTl.from(".t-active-menu",{
        display: "block",
        scale: 1.5,
        duration: 1,
    },"<")
    loadPageTl.to(".header__social",{
        opacity: 1
    }, "<1")
    loadPageTl.to(".header__social img",{opacity: 1})
}

export function animLeavePage(url, router) {
    leavePageTl.to(".header__social img",{opacity: 0, duration:.4})
    leavePageTl.to(".header__social",{
        opacity: 0,
        duration:.4
    }, "<")
    leavePageTl.to(".header__menu_item",{
        opacity: 0,
        stagger: {
            from: "end",
            axis: "x",
            amount: .4
        },
    }, "<")
    leavePageTl.to(".header__container",{
        opacity: 0,
        duration: .3,
        y: -50,
        
    })
    leavePageTl.to(".app",{
        opacity: 0,
        duration: .5,
        onComplete() {
            router.push(url)
        }
    })
}