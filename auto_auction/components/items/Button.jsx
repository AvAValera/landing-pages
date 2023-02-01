import { useRouter } from "next/router";
import { animLoadContactPage } from "../layout/animation";


export default function ButtonContacts({text = "CONTACT US", name = "theme-btn"}) {

    const router = useRouter();

    return (
        <button
            onClick={() => animLoadContactPage(router)}
            className={`t-main-btn-primary ${name}`}
        >
            {text}
        </button>
    );
}
