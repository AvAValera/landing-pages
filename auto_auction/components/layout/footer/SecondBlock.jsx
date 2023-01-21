import Link from "next/link";

export default function SecondBlock({menu}) {
    
    const getYear = () => {
        const date = new Date();
        return date.getFullYear()
    }
    
    return (
        <div className="second-block ">
            <div className="second-block__container">
                <div className="second-block__wrapper">
                    <div className="second-block__logo mt-[28px] mb-[64px] md:m-0">
                        <Link href={"/"}>
                            <picture>
                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/img/logo/logo-footer.svg"
                                />
                                <img src="/img/logo/mobile-logo-footer.svg" alt="logo" />
                            </picture>
                        </Link>
                    </div>
                    <menu className="second-block__menu md:w-[100px] md:ml-auto md:mr-[10%] md:m-0">
                        <nav className="flex flex-col text-center gap-[30px] mb-[87px] md:text-left md:m-0">
                            {
                                menu.map(el => <Link key={el.id} className="text-lg text-white" href={el.url}>{el.name}</Link>)
                            }
                        </nav>
                    </menu>
                    <div className="second-block__contact mb-[112px] md:m-0">
                        <div className="second-block__social flex flex-row gap-5 justify-center mb-[34px] md:justify-start ">
                            <Link href={"/"}>
                                <img src="/img/footer/whatsapp.svg" alt="icon_social" />
                            </Link>
                            <Link href={"/"}>
                                <img src="/img/footer/telegram.svg" alt="icon_social" />
                            </Link>
                        </div>
                        <div className="second-block__telephone ">
                            <Link className="second-block__telephone_email" href={"email:info@cargo.us"}>info@cargo.us</Link>
                            <Link className="second-block__telephone_tel" href={"tel:+19120000000"}>+1 912 000 0000</Link>
                        </div>
                    </div>
                </div>
                <div className="second-block__copyright">Copyright © {getYear()} Cargo. All Rights reserved.</div>
            </div>
        </div>
    );
}


// flex flex-col relative justify-center items-center bg-[#18162D] before:rounded-t-[35px] before:bg-[#18162D] before:w-full before:h-[50px] before:block before:-top-11 before:absolute before:contents-[' ']