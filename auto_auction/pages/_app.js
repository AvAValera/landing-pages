import "../styles/globals.css";
import "../styles/template.scss";
import "../styles/layout/layout.scss";
import "../styles/home/home.scss";

export default function App({ Component, pageProps }) {
    return (
        <div className="next__container">
			<picture className={`fixed -z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 `}>
                <img className="w-[1000px]" src="/img/logo/logo.svg" alt="" />
            </picture>
            <div className="app bg-white">
                <Component {...pageProps} />
            </div>
        </div>
    );
}
