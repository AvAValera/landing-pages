import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { animLoadPage, animLeavePage } from "@/components/layout/animation";
import Link from "next/link";
import { useRouter } from "next/router";
import { gsap } from "gsap";

export default function Page404() {
    const router = useRouter();
    const tl = gsap.timeline();

    useEffect(() => {
        window.document.scrollingElement?.scrollTo(0, 0)
        animLoadPage();
        tl.to(".page-not-found", {opacity: 1, duration: 1, delay: .5})
        tl.from(".page-not-found__header",{opacity: 0, y: -100, duration: .5})
        tl.from(".page-not-found__title",{opacity: 0, scale: 0.5, duration: .2})
        tl.from(".page-not-found__btn",{opacity: 0, duration: .2})
    }, []);

    return (
        <Layout title="Page not found">
            <div className="page-not-found flex flex-col justify-center items-center mb-[100px] layout__page opacity-0">
                <h1 className="page-not-found__header text-[100px] text-main-color font-bold">
                    404
                </h1>
                <h3 className="page-not-found__title text-main-color text-[30px] text-center">
                    Page was deleted or not found
                </h3>
                <Link href={"/"}>
                    <button className="page-not-found__btn t-main-btn mt-[20px] px-3">
                        BACK TO MAIN PAGE
                    </button>
                </Link>
            </div>
        </Layout>
    );
}
