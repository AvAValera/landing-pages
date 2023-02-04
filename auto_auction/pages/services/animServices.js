import {gsap} from "gsap";
import {ScrollTrigger} from "../../node_modules/gsap/ScrollTrigger";

export function animAssistOption(header) {

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: ".assistance-option",
                start: "top 80%",
                end: "200% bottom",
                scrub: 2,
            }
        });
        tl.from(header.current,{
            opacity: 0,
            x: -300,
        })
        tl.from(".assistance-option__item", {
            opacity: 0,
            stagger: 1
        })
    })
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".assistance-option",
            start: "top 80%",
            end: "150% bottom",
            scrub: 2,
        }
    });
    tl.from(header.current,{
        opacity: 0,
        x: -300,
    })
    tl.from(".assistance-option__item", {
        opacity: 0,
        stagger: 1
    })

}