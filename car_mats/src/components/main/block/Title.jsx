import React, {useEffect, useState} from "react";

export default function Title({setShowModal}) {
    const [switchModal, setSwitchModal] = useState(false)
    useEffect(() => {
        if(switchModal){
            setShowModal(true)
            setSwitchModal(false)
        }
        
    }, [switchModal, setShowModal]);


    return (
        <div className="title">
            <h1 className="title__header">Инновационные коврики для автомобиля</h1>
            <span className="title__sub-title">в вашем городе</span>
            <button className="title__order-btn" onClick={() => setSwitchModal(pre => !pre)}>ЗАКАЗАТЬ</button>
        </div>
    );
}
