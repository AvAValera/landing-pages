import Link from "next/link";
import  {animServicesItems} from "../animIndexPage"

export default function CardService({ id, imgBg, title, url = "/" }) {
    

    function cardClass(id) {
        if (id === 1) return "card-service card-service__1";
        if (id === 2) return "card-service card-service__2";
        if (id === 3) return "card-service card-service__3";
        if (id === 4) return "card-service card-service__4";
        if (id === 9) return "card-service card-service__9";

        return "card-service";
    }

    return (
        <Link
        onClick={() => animServicesItems()}
            scroll={false}
            className={cardClass(id)}
            href={url}
            style={{ backgroundImage: `url('${imgBg}')` }}
        >
            <div className="">
                <div className="card-service__container ">
                    <h2 className="text-2xl  font-bold w-[200px] pl-[26px] pt-10 ">
                        {title}
                    </h2>
                </div>
            </div>
        </Link>
    );
}
