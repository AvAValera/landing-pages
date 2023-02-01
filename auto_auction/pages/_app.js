import "../styles/globals.css";
import "../styles/template.scss";
import "../styles/layout/layout.scss";
import "../styles/home/home.scss";
import {motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {

    const {asPath} = useRouter();

    return (
        <div className="next__container">
			<picture className={`fixed -z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 `}>
                <img className="w-[1000px]" src="/img/logo/logo.svg" alt="" />
            </picture>
            <div style={{display: "none"}} className="contact-effect fixed top-0 left-0 z-10 bg-main-color rounded-[100%] w-[10px] h-[10px]"></div>
            <AnimatePresence initial={false}  mode="wait">
                <motion.div
                key={asPath}
                initial={asPath !== "/contacts" ? {opacity: 0}: {opacity: 1}}
                animate={{opacity: 1}}
                exit={asPath !== "/contacts" ? {opacity: 0, transition:{delay: 1}} : {opacity: 0}}
                transition={{duration: .5}}
                className="app bg-white">
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
