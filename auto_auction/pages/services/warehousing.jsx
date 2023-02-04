import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ButtonContacts from "@/components/items/Button";
import WarehousingCard from "@/components/services/warehousing/WarehousingCard";

export default function Warehousing() {

    useEffect(() => {
        window.document.scrollingElement?.scrollTo(0, 0)
    }, []);

    return (
        <Layout title="Warehousing">
            <div className="warehousing">
                <div className="warehousing__container">
                    <section className="warehousing__header layout__page bg-[url('/img/warehousing/bg.png')] bg-no-repeat bg-[right_bottom_100px] bg-[length:100%] md:bg-[length:750px] lg:bg-[length:850px] md:bg-[right_center] mb-[20xp]">
                        <h1 className="text-[38px] leading-[42px] font-bold md:text-[54px] mb-[25px]">Warehousing</h1>
                        <p className="leading-[24px] max-w-[495px] mb-[25px] md:mb-[50px]">
                            We offer complete line of warehousing services. We can receive your goods, segregate them as needed, and store/prepare them for final destination. We handle warehousing services for all commodities including automobiles, general cargo, light and heavy machinery, boats, ATVs, Hazmat and any other cargo.
                        </p>
                        <ButtonContacts name={"mb-[400px] md:mb-[297px]"} text="CONTACT US TO LEARN MORE" />
                    </section>
                    <section className="warehousing__cards layout__page mb-[110px] md:mb-[140px]">
                        <h2 className="text-[34px] md:text-[46px] leading-[43px] font-bold mb-[30px] md:mb-[45px]">We provide you with the following</h2>
                        <div className="warehousing__cards-container flex flex-wrap justify-center items-center gap-5 md:gap-[25px]">
                            <WarehousingCard  text={"Dedicated warehousing"} />
                            <WarehousingCard  text={"Shared and multi-customer warehousing"} />
                            <WarehousingCard  text={"Short term and long term warehousing"} />
                            <WarehousingCard  text={"Transloading"} />
                            <WarehousingCard  text={"Cross docking"} />
                            <WarehousingCard  text={"Order picking"} />
                            <WarehousingCard  text={"Pick and pack"} />
                            <WarehousingCard  text={"Drop shipping"} />
                            <WarehousingCard  text={"Consolidation and deconsolidation"} />
                            <WarehousingCard  text={"Along with many other value added services"} />
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}
