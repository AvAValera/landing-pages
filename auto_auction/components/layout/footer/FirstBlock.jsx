

export default function FirstBlock() {

    const sendForm = (e) => {
        e.preventDefault()
    } 

    return (
        <div className="first-block">
            <div className="first-block__container flex flex-col gap-5  bg-main-color rounded-t-[35px] pt-[102px] pb-[80px] lg:rounded-t-[50px] lg:flex-row lg:gap-12 lg:items-center lg:pt-[92px] lg:pb-[134px] lg:pl-[132px]">
                <div className="first-block__contacts mx-auto px-7">
                    <div className="first-block__title">
                        <h2 className="font-bold text-[34px] text-white leading-[43px] mb-5 lg:text-[46px]">Contact us</h2>
                        <p className="text-base leading-5 text-white mb-[35px]">
                            Contact us if you need more information about our
                            services
                        </p>
                    </div>
                    <form action="/#" className="first-block__form max-w-[400px]">
                        <input className="bg-[#5591FF] rounded-[10px] w-full h-[60px] px-[29px] mb-[15px] text-white placeholder:text-white border-none" type="text" name="name" placeholder="Name"/>
                        <input className="bg-[#5591FF] rounded-[10px] w-full h-[60px] px-[29px] mb-[15px] text-white placeholder:text-white border-none" type="tel" name="telephone" placeholder="Phone Number"/>
                        <textarea className="bg-[#5591FF] rounded-[10px] w-full min-h-[60px] max-h-28 px-[29px] pt-[19px] mb-[25px] text-white placeholder:text-white border-none" name="message" cols="30" rows="10" placeholder="Message"/>
                        <input className="bg-main-color border-white border-opacity-40 w-6 h-6 focus:ring-0 focus:ring-offset-0 mr-5 " id="policy" type="checkbox" />
                        <label className="text-white " htmlFor="policy">
                            I agree with the Privacy policy
                        </label>
                        <input onClick={(e) => sendForm(e)} className="block w-full mt-[37px] py-5 bg-[#F0F0FA] text-[#8C8C8C] text-base font-bold rounded-[10px]" type="submit" value={"SEND A MESSAGE"} />
                    </form>
                </div>
                <div className="first-block__image  ml-auto">
                    <img src="/img/footer/footer-img.png" alt="img-footer" />
                </div>
            </div>
        </div>
    );
}
