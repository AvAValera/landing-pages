import CardService from "./CardService";
import Link from "next/link";
import {useRouter} from "next/router"

export default function Services() {

    const router = useRouter();

    const card = [
        {id: 1, imgBg: "/img/index/services/serv1.png", title: "Buying assistance", url: "/services/buying-assistance"},
        {id: 2, imgBg: "/img/index/services/serv2.png", title: "Auto transport", url: "/services/auto-transport"},
        {id: 3, imgBg: "/img/index/services/serv3.png", title: "Warehousing", url: ""},
        {id: 4, imgBg: "/img/index/services/serv4.png", title: "Automobile loading", url: ""},
        {id: 5, imgBg: "/img/index/services/serv5.png", title: "Motorcycle loading", url: ""},
        {id: 6, imgBg: "/img/index/services/serv6.png", title: "Boat loading", url: ""},
        {id: 7, imgBg: "/img/index/services/serv7.png", title: "Heavy machinery loading", url: ""},
        {id: 8, imgBg: "/img/index/services/serv8.png", title: "Dismantling", url: ""},
        {id: 9, imgBg: "/img/index/services/serv9.png", title: "Parts purchase assistance", url: ""},
    ];

    return (
        <section>
            <div className="services mb-[120px]">
                <div className="services__container px-7 lg:px-[129px] max-w-[1366px] mx-auto">
                    <h2 className="text-main-color text-lg mb-10 font-semibold">SERVICES WE DO</h2>
                    <div className="services__items mb-[50px] flex flex-wrap justify-center items-center gap-[25px]">
                        {
                            card.map(el => <CardService key={el.id} {...el} />)
                        }
                    </div>
                    {
                        router.route !== "/services" ? 
                        <button className="t-main-btn-secondary">
                            <Link href={"/services"}>MORE ABOUT SERVICES</Link>
                        </button>
                        :
                        null
                    }
                </div>
            </div>
        </section>
    );
}
