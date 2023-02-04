import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Services from "@/components/home/services/Services";
import { gsap } from "gsap";
import { ScrollTrigger } from '../../node_modules/gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
    
    const tl = gsap.timeline()
    useEffect(() => {
        window.document.scrollingElement?.scrollTo(0, 0)
        tl.from(".services__main", {
            opacity: 0,
            delay: 1,
        });
        
        tl.from(".card-service", {
            opacity: 0,
            stagger: .3,
            scale: 0.8,
        })
    }, []);

    return (
        <Layout title="Services">
            <div className="services__main">
                <div className="px-7 lg:px-[129px] max-w-[1366px] mx-auto mb-[30px]  md:mb-[50px]">
                    <h2 className="text-[38px] md:text-[54px]">Services</h2>
                </div>
                <Services />
                <div className="service__bottom-block px-[27px] lg:px-[129px] max-w-[1366px] mx-auto mb-[130px] flex flex-col lg:flex-row lg:justify-between gap-[35px]">
                    <h2 className="text-[22px] text-main-color font-semibold">
                        why you should choose us
                    </h2>
                    <div className="leading-[19px] max-w-[540px]">
                        <p>
                            We provide full range of logistics related
                            outsourcing services for Freight Forwarders, NVOCCs,
                            Auto Dealers and other Exporters in International
                            Freight Industry.
                        </p>
                        <br />
                        <p>
                            We can handle any kind of commodity and specialize
                            in automotive industry. Our Export Management
                            program will help you to save the most money
                            possible.
                        </p>
                        <br />
                        <p>
                            We provide you with the safest loading process and
                            inventory management along with Cargo Receipts and
                            Inspection Reports. You will receive all photos of
                            cargo at the time of receipt and at loading. It can
                            be a great opportunity for you to expand your
                            operation in South East of USA.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
