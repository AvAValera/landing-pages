import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";

export default function Footer({ menu }) {
    return (
        <footer className="footer">
            <div className="footer__container">
                <FirstBlock />
                <SecondBlock menu={menu}/>
            </div>
        </footer>
    );
}
