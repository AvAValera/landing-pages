import { useEffect } from "react";

import Layout from "@/components/layout/Layout";
import {gsap} from "gsap";

export default function BuyingAssistance() {
    
    useEffect(() => {
        gsap.to(".assistance__header",{
            opacity: 1,
            duration: 1,
            delay: 1,
            scale: 1,
        })
    }, []);
    
    return (
        <Layout title="Buying assistance">
            <div className="assistance">
                <div className="assistance__container ">
                    <div className="assistance__header layout__page bg-[url('/img/buying_assistance/bg.png')] bg-no-repeat bg-[right_-120px_bottom] bg-[length:110%] md:bg-[length:600px] md:bg-[right_-100px_center] lg:bg-[length:850px] lg:bg-[right_-200px_center] xl:bg-[length:950px] xl:bg-[right_-200px_top] pb-[359px] lg:pb-[277px] opacity-0 scale-95">
                        <h1 className="t-main-header">Buying assistance</h1>
                        <p className="t-main-title">Buying a vehicle at an auto auction is a great way to make a smart buy. Whether you are seeking that just-right vehicle for a client, looking for a smart money-maker to add to your lot inventory, or you’re buying a vehicle as a private buyer for yourself, auto auctions offer plenty of bargains.</p>
                        <button className="t-main-btn-primary">CONTACT US TO LEARN MORE</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
