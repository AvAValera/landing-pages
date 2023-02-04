import { gsap } from "gsap";
import {ScrollTrigger} from '../../node_modules/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

export function animDescription() {

    mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: ".description",
                start: "top 60%",
            }
        });
    
        const lines = gsap.utils.toArray(".description__line");
        tl.from(".description__header", {
            opacity: 0,
            duration: .4
        })
        tl.to(lines,{
            width: "201px",
            duration: 1
        })
        tl.to(".description__item-img",{
            opacity: 1,
            duration: 1
        },"<")
        tl.from(".description__text-item",{
            opacity: 0,
            stagger: .3
        },"<")
    })
}

export function slideBack() {
    const schema = document.querySelector(".description__schema");
    schema.classList.remove("description-slide");
    
    gsap.to(".description__schema", {
        right: "0px",
        duration: 1,
        ease: "Power4.easeInOut"
    });
}

export function slideForward() {
    const schema = document.querySelector(".description__schema");
    schema.classList.add("description-slide");
    gsap.to(".description-slide", {
        right: 1800 - window.innerWidth + "px",
        duration: 1,
        ease: "Power4.easeInOut"
    });
}



export function animServicesItems() {
    mm.add("(min-width: 1082px)", () => {
        gsap.to(".card-service:nth-child(1)" ,{
            opacity: 0,
            x: -100,
            y: -100,
            duration: 1
        })
        gsap.to(".card-service:nth-child(2)" ,{
            opacity: 0,
            x: 0,
            y: -100,
            duration: 1
        })
        gsap.to(".card-service:nth-child(3)" ,{
            opacity: 0,
            x: 100,
            y: -100,
            duration: 1
        })
        gsap.to(".card-service:nth-child(4)" ,{
            opacity: 0,
            x: -100,
            y: 0,
            duration: 1
        })
        gsap.to(".card-service:nth-child(5)" ,{
            opacity: 0,
            scale: 0.1,
            duration: 1
        })
        gsap.to(".card-service:nth-child(6)" ,{
            opacity: 0,
            x: 100,
            y: 0,
            duration: 1
        })
        gsap.to(".card-service:nth-child(7)" ,{
            opacity: 0,
            x: -100,
            y: 100,
            duration: 1
        })
        gsap.to(".card-service:nth-child(8)" ,{
            opacity: 0,
            x: 0,
            y: 100,
            duration: 1
        })
        gsap.to(".card-service:nth-child(9)" ,{
            opacity: 0,
            x: 100,
            y: 100,
            duration: 1
        })
        gsap.to(".services__sub-title", {
            x: "-100%",
            opacity: 0,
            ease: "back.in(1)",
        })
    })
    
}