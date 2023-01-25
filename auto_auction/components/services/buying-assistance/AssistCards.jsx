export default function AssistCards() {
    return (
        <section>
            <div className="assistance-cards ">
                <h2 className="text-[34px] md:text-[46px] font-bold mb-[30px] md:mb-[35px]">How it Works</h2>
                <div className="assistance-cards__container mb-[110px] md:mb-[120px] flex flex-wrap justify-center gap-[25px]">
                    <div className="assistance-cards__item flex-none w-[320px] h-[368px] md:h-[335px] md:w-[352px] px-[23px] py-[43px] md:py-[35px] md:pb-[32px] rounded-[20px] shadow-servshadow">
                        <h3 className="text-main-color text-[22px] font-semibold mb-5">
                            Choose a car
                        </h3>
                        <p>
                            Visit one of the auto auctions and choose a car.
                            Auto auctions that take place online should post
                            pictures of the vehicles you’re bidding on, and if
                            they don’t — we wouldn’t trust them. You can buy
                            many different vehicles from online auto auctions,
                            from junkers to project cars to expensive, high-end
                            vehicles.
                        </p>
                    </div>
                    <div className="assistance-cards__item flex-none w-[320px] h-[368px] md:h-[335px] md:w-[352px] px-[23px] py-[43px] md:py-[35px] md:pb-[32px] rounded-[20px] shadow-servshadow">
                        <h3 className="text-main-color text-[22px] font-semibold mb-5">
                            Provide an information
                        </h3>
                        <p className="mb-[10px]">
                            Every auction will have several pieces of
                            information that you’ll need to supply to shipping
                            company.
                        </p>
                        <h4 className="text-main-color mb-[10px]">
                            This information includes:
                        </h4>
                        <ul className="list-disc ml-[20px] leading-6">
                            <li>Lot Number</li>
                            <li>Buyer Number</li>
                            <li>Release Form</li>
                        </ul>
                    </div>
                    <div className="assistance-cards__item flex-none w-[320px] h-[368px] md:h-[335px] md:w-[352px] px-[23px] py-[43px] md:py-[35px] md:pb-[32px] rounded-[20px] shadow-servshadow">
                        <h3 className="text-main-color text-[22px] font-semibold mb-5">
                            Deliver from the auction to our yard
                        </h3>
                        <p>
                            After bidding, the vehicle will be sent to our yard
                            for storage until departure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
