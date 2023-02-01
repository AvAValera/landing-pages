import Layout from "@/components/layout/Layout";
import Button from "@/components/items/Button";

export default function AutoTransport() {
    return (
        <Layout title="Auto transport">
            <div className="auto-transport">
                <div className="auto-transport__container  ">
                    <section className="auto-transport__head layout__page bg-[url('/img/auto_transport/bg.png')] bg-no-repeat bg-[right_-300px_bottom] md:bg-[right_-500px_center] lg:bg-[right_-600px_center] main-1366:bg-[right_-350px_center] bg-[length:150%] md:bg-[length:1000px] lg:bg-[length:1200px]">
                        <h1 className="text-[38px] leading-[42px] mb-[25px] md:text-[54px] md:leading-[54px]">Auto transport</h1>
                        <p className="leading-[24px] max-w-[495px] mb-[25px] md:mb-[50px]">
                            Cargo safety and your piece of mind – our main
                            priorities.
                            <br /><br />
                            The art of shipping vehicles demands the highest
                            level of work. Our expertise and professional team
                            provides you special customized service.
                        </p>
                        <Button name="mb-[429px] md:mb-[328px]" text="CONTACT US TO LEARN MORE" />
                    </section>
                    <section className="auto-transport__main layout__page">
                        <div className="auto-transport__open-trailer mb-[100px] mb:mb-[120px]">
                            <div className="flex flex-col gap-[24px] mb-[40px] md:mb-[60px] md:flex-row md:items-center">
                                <h2 className="text-[28px] md:text-[32px] leading-[28px] text-main-color font-bold flex-none">Open trailer</h2>
                                <div className="auto-transport__line w-full h-[4px] bg-main-color rounded-[3px]"></div>
                            </div>
                            <div className="flex flex-col items-center justify-between lg:flex-row lg:gap-[90px]  gap-[65px] ">
                                <div className="max-w-[417px]">
                                    <p className="max-w-[417px] text-[22px] leading-6 mb-[24px] md:mb-[55px]">Open Trailer auto shipping is known as most common type of auto transport.</p>
                                    <div className="text-main-color text-[22px] font-bold leading-6 mb-[30px]">Easy loading</div>
                                    <div className="text-main-color text-[22px] font-bold leading-6 mb-[30px]">Quick shipment</div>
                                    <div className="text-main-color text-[22px] font-bold leading-6 mb-[15px]">Cost - effective solution</div>
                                    <p className="max-w-[370px]">We recommend for: Salvage cars, Used cars, Cars from auction</p>
                                </div>
                                <div>
                                    <img src="/img/auto_transport/img-1.png" alt="img_auto" />
                                </div>
                            </div>
                        </div>
                        <div className="auto-transport__enclosed-trailer mb-[130px] md:mb-[143px]">
                            <div className="flex flex-col gap-[24px] mb-[40px] md:mb-[60px] md:flex-row md:items-center">
                                <h2 className="text-[28px] md:text-[32px] leading-[28px] text-main-color font-bold flex-none">Enclosed trailer</h2>
                                <div className="auto-transport__line w-full h-[4px] bg-main-color rounded-[3px]"></div>
                            </div>
                            <div className="flex flex-col items-center justify-between lg:flex-row lg:gap-[90px]  gap-[65px]"> 
                                <div className="max-w-[470px]">
                                    <p className="max-w-[417px] text-[22px] leading-6 mb-[24px] md:mb-[55px]">Enclosed Trailer is the safest solution, but more expensive.</p>
                                    <div className="text-main-color text-[22px] font-bold leading-6 mb-[30px]">Protection against environmental conditions</div>
                                    <div className="text-main-color text-[22px] font-bold leading-6 mb-[30px]">Individual solution for handling of vehicles</div>
                                    <p>
                                        We recommend for: Brand new, Exclusive and collectible cars.
                                        All our carriers have at least 250,000 cargo insurance.
                                    </p>
                                </div>
                                <div>
                                    <img src="/img/auto_transport/img-2.png" alt="img_auto" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}
