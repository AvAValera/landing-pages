import React from "react";
import { useMediaPredicate } from "react-media-hook";
import Head from "next/head";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MobileMenu from "./mobile_menu/MobileMenu";

export default function Layout({ title = "", children, mode = null}) {
    const menu = [
        { id: 1, url: "/", name: "HOME" },
        { id: 2, url: "/services", name: "SERVICES" },
        { id: 3, url: "/contacts", name: "CONTACTS" },
    ];
    const titleHead = `MDA-Shipping ${title}`;
    const mobMenu = useMediaPredicate("(max-width: 768px)");
    const [showMenu, setShowMenu] = React.useState(false)
    
    
    return (
        <div>
            {mobMenu && <MobileMenu menu={menu} showMenu={showMenu} setShowMenu={setShowMenu} />}
            <div className={mode === 'lite' ? "layout min-w-[375px] mx-auto bg-main-color" : "layout min-w-[375px] mx-auto"}>
                <Head>
                    <title>{titleHead}</title>
                    <meta
                        name="description"
                        content="We ship cars, motorcycles, boats, special machinery in containers from the USA to all over the world."
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header menu={menu} showMenu={showMenu} setShowMenu={setShowMenu} mode={mode} />
                <div>{children}</div>
                {mode !== "lite" && <Footer menu={menu} />}
            </div>
        </div>
    );
}
