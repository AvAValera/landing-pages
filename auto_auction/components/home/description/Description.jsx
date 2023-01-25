import { useEffect } from "react";
import { gsap } from "gsap";

export default function Description() {
    
    useEffect(() => {
        function resPosition(){
            document.querySelector(".description__schema").style.right = "0px";
        }
        window.addEventListener("resize", resPosition);
        
        return () => window.removeEventListener("resize", resPosition);
    }, []);

    function slideBack() {
        const schema = document.querySelector(".description__schema");
        schema.classList.remove("description-slide");
        
        gsap.to(".description__schema", {
            right: "0px",
            duration: 1,
            ease: "Power4.easeInOut"
        });
    }
    
    function slideForward() {
        const schema = document.querySelector(".description__schema");
        schema.classList.add("description-slide");
        gsap.to(".description-slide", {
            right: 1800 - window.innerWidth + "px",
            duration: 1,
            ease: "Power4.easeInOut"
        });
    }

    return (
        <section>
            <div className="description mb-[110px] ">
                <div className="description__container pl-[31px] lg:pl-[132px] overflow-x-hidden ">
                    <div className="description__header flex justify-between items-center mb-[35px] max-w-[1600px] mx-auto">
                        <h2 className="font-bold text-[34px] text-[#18162D]">
                            How it works
                        </h2>
                        <div className="arrow hidden lg:flex arrow:hidden mr-[128px] ">
                            <svg
                                onClick={() => slideBack()}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-10 h-10 cursor-pointer"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                            <svg
                                onClick={() => slideForward()}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-10 h-10 cursor-pointer"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="description__schema flex mx-auto gap-[21px] max-w-[350px]  lg:flex-col lg:max-w-[1600px] lg:gap-[29px] relative arrow:right-[0px]">
                        <div className="description__item flex flex-col items-center lg:flex-row">
                            <div className="description__item-img ">
                                <img
                                    src="img/index/description/icon1.svg"
                                    alt="description_icon"
                                />
                            </div>
                            <div className="description__line"></div>
                            <div className="description__item-img">
                                <img
                                    src="img/index/description/icon2.svg"
                                    alt="description_icon"
                                />
                            </div>
                            <div className="description__line"></div>
                            <div className="description__item-img">
                                <img
                                    src="img/index/description/icon3.svg"
                                    alt="description_icon"
                                />
                            </div>
                            <div className="description__line"></div>
                            <div className="description__item-img">
                                <img
                                    src="img/index/description/icon4.svg"
                                    alt="description_icon"
                                />
                            </div>
                            <div className="description__line"></div>
                            <div className="description__item-img">
                                <img
                                    src="img/index/description/icon5.svg"
                                    alt="description_icon"
                                />
                            </div>
                        </div>
                        <div className="description__text flex flex-col gap-[60px] lg:flex-row lg:gap-[45px]">
                            <div className="description__text-item mt-[30px] flex-none lg:w-[283px] lg:mt-0">
                                <h3 className="text-[22px] text-[#18162D] font-medium mb-[15px] leading-6">
                                    Bid and buy a lot
                                </h3>
                                <div>
                                    <p className="text-gray-600 leading-5">
                                        There's a wide variety of auctions where
                                        bargains can be had at wholesale prices
                                        for buyers who know what they’re doing.
                                    </p>
                                </div>
                            </div>
                            <div className="description__text-item mt-[30px] flex-none lg:w-[283px] lg:mt-0">
                                <h3 className="text-[22px] text-[#18162D] font-medium mb-[15px] leading-6">
                                    Deliver your units from the auction to our
                                    yard
                                </h3>
                                <div>
                                    <p className="text-gray-600 leading-5">
                                        There's a wide variety of auctions where
                                        bargains can be had at wholesale prices
                                        for buyers who know what they’re doing.
                                    </p>
                                </div>
                            </div>
                            <div className="description__text-item mt-[20px] flex-none lg:w-[283px] lg:mt-0">
                                <h3 className="text-[22px] text-[#18162D] font-medium mb-[15px] leading-6">
                                    Load your vehicles into a container
                                </h3>
                                <div>
                                    <p className="text-gray-600 leading-5">
                                        At our loading facility your car is
                                        driven into the container and carefully
                                        positioned before all four wheels are
                                        safely chocked.
                                    </p>
                                </div>
                            </div>
                            <div className="description__text-item mt-[20px] flex-none lg:w-[283px] lg:mt-0">
                                <h3 className="text-[22px] text-[#18162D] font-medium mb-[15px] leading-6">
                                    Buy all the spare parts if necessary
                                </h3>
                                <div>
                                    <p className="text-gray-600 leading-5">
                                        We offer original spare parts and
                                        components for the different types of
                                        vehicles.
                                    </p>
                                </div>
                            </div>
                            <div className="description__text-item mt-[40px] flex-none lg:w-[283px] lg:mt-0">
                                <h3 className="text-[22px] text-[#18162D] font-medium mb-[15px] leading-6">
                                    Ship the container to your place
                                </h3>
                                <div>
                                    <p className="text-gray-600 leading-5">
                                        Your car will arrive at the destination
                                        in the condition it was loaded in the
                                        container.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
