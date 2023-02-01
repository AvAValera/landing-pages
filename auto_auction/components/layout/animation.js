import { gsap } from "gsap";
const loadPageTl = gsap.timeline();
const leavePageTl = gsap.timeline();
const loadContactsPage = gsap.timeline();


export function animLoadPage() {
    loadPageTl.to(".header__container",{
        opacity: 1,
        duration: .5,
        y: 0,
        delay: 1
    },"<")
    loadPageTl.to(".header__menu_item",{
        opacity: 1,
        duration: .5,
        stagger: .2,
    })
    loadPageTl.from([".t-active-menu", ".t-active-menu-second"],{
        display: "block",
        scale: 1.5,
        duration: 1,
    },"<")
    loadPageTl.to(".header__social",{
        opacity: 1
    }, "<1")
    loadPageTl.to(".header__social img",{opacity: 1})
}

export function animLeavePage() {
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
}

export function animLoadContactPage(router) {
    loadContactsPage.set(".contact-effect",{
        display: "block",
        opacity: 1,
        scale: 1
    })
    loadContactsPage.to(".contact-effect",{
        top: "0",
        left: "0",
        scale: "1000",
        duration: 1,
    })
    loadContactsPage.set(".contact-effect",{
        width: "100%",
        height: "100%",
        onComplete() {
            router.push("/contacts")
        }
    })
}