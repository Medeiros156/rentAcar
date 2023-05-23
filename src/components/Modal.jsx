import { useEffect, useState } from "react";
import mobi from "../images/cars/am_fiat_mobi.png";
import kwid from "../images/cars/am_renault_kwid.png";
import argo from "../images/cars/b_fiat_argo.png";
import logan from "../images/cars/bs_renault_logan.png";
import cronos from "../images/cars/ca_fiat_cronos-1.png";
import p208 from "../images/cars/e_peugeot_208-1.png";

function Modal({ modal,
    openModal,
    carType,
    pickUp,
    dropOff,
    pickTime,
    dropTime,
    confirmBooking
}) {
    // modal infos
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipCode] = useState("");


    // taking value of modal inputs
    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
    };

    const handleAge = (e) => {
        setAge(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleCity = (e) => {
        setCity(e.target.value);
    };

    const handleZip = (e) => {
        setZipCode(e.target.value);
    };











    let imgUrl;
    switch (carType) {
        case "Fiat Mobi":
            imgUrl = mobi;
            break;
        case "Renault Kwid":
            imgUrl = kwid;
            break;
        case "Fiat argo":
            imgUrl = argo;
            break;
        case "Renault Logan":
            imgUrl = logan;
            break;
        case "Peugeot 208":
            imgUrl = p208;
            break;
        case "Fiat Cronos":
            imgUrl = cronos;
            break;
        default:
            imgUrl = "";
    }

    return (
        <>
            <div
                onClick={openModal}
                className={`modal-overlay ${modal ? "active-modal" : ""}`}
            ></div>
            <div className={`booking-modal ${modal ? "active-modal" : ""}`
            }>
                {/* modal ------------------------------------ */}


                {/* title */}
                < div className="booking-modal__title" >
                    <h2>Complete Reservation</h2>
                    <i onClick={openModal} className="fa-solid fa-xmark"></i>
                </div >
                {/* message */}
                < div className="booking-modal__message" >
                    <h4>
                        <i className="fa-solid fa-circle-info"></i>
                        &nbsp; Ao completar essa reserva, você irá receber um email com código de confirmação de reserva
                    </h4>

                </div >
                {/* car info */}
                < div className="booking-modal__car-info" >
                    <div className="dates-div">
                        <div className="booking-modal__car-info__dates">
                            <h5>Localização e datas</h5>
                            <span>
                                <i className="fa-solid fa-location-dot"></i>
                                <div>
                                    <h6>Data e Hora de Retirada</h6>
                                    <p>
                                        {pickTime ? pickTime : ""} /{" "}
                                        <input type="time" className="input-time"></input>
                                    </p>
                                </div>
                            </span>
                        </div>

                        <div className="booking-modal__car-info__dates">
                            <span>
                                <i className="fa-solid fa-location-dot"></i>
                                <div>
                                    <h6>Data e Hora de Devolução</h6>
                                    <p>
                                        {dropTime ? dropTime : ""} /{" "}
                                        <input type="time" className="input-time"></input>
                                    </p>
                                </div>
                            </span>
                        </div>

                        <div className="booking-modal__car-info__dates">
                            <span>
                                <i className="fa-solid fa-calendar-days"></i>
                                <div>
                                    <h6>Local de Retirada</h6>
                                    <p>{pickUp ? pickUp : ""}</p>
                                </div>
                            </span>
                        </div>

                        <div className="booking-modal__car-info__dates">
                            <span>
                                <i className="fa-solid fa-calendar-days"></i>
                                <div>
                                    <h6>Local de Devolução</h6>
                                    <p>{dropOff ? dropOff : ""}</p>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="booking-modal__car-info__model">
                        <h5>
                            <span>Carro -</span> {carType}
                        </h5>
                        {imgUrl && <img src={imgUrl} alt="car_img" />}
                    </div>
                </div >
                {/* personal info */}
                < div className="booking-modal__person-info" >
                    <h4>Informações pessoais</h4>
                    <form className="info-form">
                        <div className="info-form__2col">
                            <span>
                                <label>
                                    Primeiro Nome<b>*</b>
                                </label>
                                <input
                                    value={name}
                                    onChange={handleName}
                                    type="text"
                                    placeholder="Enter your first name"
                                ></input>
                                <p className="error-modal">Esse campo é obrigatório</p>
                            </span>

                            <span>
                                <label>
                                    Último nome <b>*</b>
                                </label>
                                <input
                                    value={lastName}
                                    onChange={handleLastName}
                                    type="text"
                                    placeholder="Enter your last name"
                                ></input>
                                <p className="error-modal ">Esse campo é obrigatório</p>
                            </span>

                            <span>
                                <label>
                                    Número de telefone<b>*</b>
                                </label>
                                <input
                                    value={phone}
                                    onChange={handlePhone}
                                    type="tel"
                                    placeholder="Enter your phone number"
                                ></input>
                                <p className="error-modal">Esse campo é obrigatório</p>
                            </span>

                            <span>
                                <label>
                                    Idade <b>*</b>
                                </label>
                                <input
                                    value={age}
                                    onChange={handleAge}
                                    type="number"
                                    placeholder="18"
                                ></input>
                                <p className="error-modal ">Esse campo é obrigatório</p>
                            </span>
                        </div>

                        <div className="info-form__1col">
                            <span>
                                <label>
                                    Email <b>*</b>
                                </label>
                                <input
                                    value={email}
                                    onChange={handleEmail}
                                    type="email"
                                    placeholder="Enter your email address"
                                ></input>
                                <p className="error-modal">Esse campo é obrigatório.</p>
                            </span>

                            <span>
                                <label>
                                    Endereço <b>*</b>
                                </label>
                                <input
                                    value={address}
                                    onChange={handleAddress}
                                    type="text"
                                    placeholder="Enter your street address"
                                ></input>
                                <p className="error-modal ">Esse campo é obrigatório.</p>
                            </span>
                        </div>

                        <div className="info-form__2col">
                            <span>
                                <label>
                                    Cidade <b>*</b>
                                </label>
                                <input
                                    value={city}
                                    onChange={handleCity}
                                    type="text"
                                    placeholder="Enter your city"
                                ></input>
                                <p className="error-modal">Esse campo é obrigatório.</p>
                            </span>

                            <span>
                                <label>
                                    CEP <b>*</b>
                                </label>
                                <input
                                    value={zipcode}
                                    onChange={handleZip}
                                    type="text"
                                    placeholder="Enter your zip code"
                                ></input>
                                <p className="error-modal ">Esse campo é obrigatório.</p>
                            </span>
                        </div>

                        <span className="info-form__checkbox">
                            <input type="checkbox"></input>
                            <p>Me mande email de descontos</p>
                        </span>

                        <div className="reserve-button">
                            <button onClick={confirmBooking}>Reservar agora</button>
                        </div>
                    </form>
                </div >
            </div >
        </>
    )


}
Modal.defaultProps = {
    modal: false,
    openModal: () => { },
    carType: "",
    pickUp: "",
    dropOff: "",
    pickTime: "",
    dropTime: "",
    confirmBooking: () => { },

};
export default Modal;