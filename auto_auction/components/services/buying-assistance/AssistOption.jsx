import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {animAssistOption} from "@/pages/services/animServices";


export default function AssistOption() {
    const header = useRef();
    const container = useRef();

    useEffect(() => {
        animAssistOption(header)
    },[gsap])

    return (
        <section>
            <div ref={container} className="assistance-option">
                <div className="assistance-option__container mb-[110px] md:mb-[130px] ">
                    <h2 ref={header} className="text-[34px] md:text-[46px] font-bold mb-[30px] md:mb-[45px]">Optional services</h2>
                    <div className="assistance-option__items flex flex-wrap justify-center gap-[25px] max-w-[1366px] mx-auto">
                        <div className="assistance-option__item w-[320px] h-[100px] md:w-[352px] shadow-servshadow rounded-[20px]">
                            <h3 className=" py-[37px] text-center text-[22px] font-bold leading-[26px]">Cargo insurance</h3>
                        </div>
                        <div className="assistance-option__item w-[320px] h-[100px] md:w-[352px] shadow-servshadow rounded-[20px]">
                            <h3 className=" py-[37px] text-center text-[22px] font-bold leading-[26px]">Long term cargo storage</h3>
                        </div>
                        <div className="assistance-option__item w-[320px] h-[100px] md:w-[352px] shadow-servshadow rounded-[20px]">
                            <h3 className=" py-[37px] text-center text-[22px] font-bold leading-[26px]">Detailing and cleaning</h3>
                        </div>
                        <div className="assistance-option__item w-[320px] h-[100px] md:w-[352px] shadow-servshadow rounded-[20px]">
                            <h3 className=" py-[24px] text-center text-[22px] w-[227px] mx-auto font-bold leading-[26px]">Additional report and inspection</h3>
                        </div>
                        <div className="assistance-option__item w-[320px] h-[100px] md:w-[352px] shadow-servshadow rounded-[20px]">
                            <h3 className=" py-[24px] text-center text-[22px] w-[227px] mx-auto font-bold leading-[26px]">Plastic film coverage of broken part</h3>
                        </div>
                        <div className="assistance-option__item w-[320px] h-[100px] md:w-[352px] shadow-servshadow rounded-[20px]">
                            <h3 className=" py-[24px] text-center text-[22px] w-[227px] mx-auto font-bold leading-[26px]">Moisture bags to avoid mold</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
