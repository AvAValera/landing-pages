import Head from "next/head";
import Header from "./header/Header";
import Footer from "./footer/Footer";


export default function Layout({ title = "", children }) {

    const menu = [
        {id: 1, url: "/", name: "HOME"},
        {id: 2, url: "/services", name: "SERVICES"},
        {id: 3, url: "/contacts", name: "CONTACTS"}
    ];
    const titleHead = `MDA-Shipping ${title}`
    return (
        <div className="layout min-w-[375px] mx-auto">
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
            <Header menu={menu} />
                <div className="layout">{children}</div>
            <Footer menu={menu} />
        </div>
    );
}
