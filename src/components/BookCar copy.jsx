import { useEffect, useState } from "react";
import mobi from "../images/cars/am_fiat_mobi.png";
import kwid from "../images/cars/am_renault_kwid.png";
import argo from "../images/cars/b_fiat_argo.png";
import logan from "../images/cars/bs_renault_logan.png";
import cronos from "../images/cars/ca_fiat_cronos-1.png";
import p208 from "../images/cars/e_peugeot_208-1.png";

function BookCar() {
  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

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

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  // based on value name show car img
  let imgUrl;
  switch (carImg) {
    case "mobi":
      imgUrl = mobi;
      break;
    case "kwid":
      imgUrl = kwid;
      break;
    case "argo":
      imgUrl = argo;
      break;
    case "logan":
      imgUrl = logan;
      break;
    case "p208":
      imgUrl = p208;
      break;
    case "cronos":
      imgUrl = cronos;
      break;
    default:
      imgUrl = "";
  }

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Alugue um carro</h2>

              <p className="error-message">
                Todos os campos são obrigatórios. <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Veja seu email com o email de confirmação de agendamento.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Selecione o tipo do seu carro <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Selecione o tipo do seu carro </option>
                    <option value="mobi">Mobi</option>
                    <option value="kwid">Kwid</option>
                    <option value="argo">Argo</option>
                    <option value="logan">Logan</option>
                    <option value="p208">Peugeaut 208</option>
                    <option value="cronos">Cronos</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Local de Retirada{" "}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Local de Retirada</option>
                    <option>Rio de Janeiro</option>
                    <option>São Paulo</option>
                    <option>Brasilia</option>
                    <option>Manaus</option>
                    <option>Salvador</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Local de Entrega{" "}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Local de Devolução</option>
                    <option>Rio de Janeiro</option>
                    <option>São Paulo</option>
                    <option>Brasilia</option>
                    <option>Manaus</option>
                    <option>Salvador</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Data de Retirada <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Data de Devolução<b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button onClick={openModal} type="submit">
                  Busca
                </button>
              </form>
            </div>
          </div>
        </div >
      </section >

      {/* modal ------------------------------------ */}

      < div className={`booking-modal ${modal ? "active-modal" : ""}`
      }>
        {/* title */}
        < div className="booking-modal__title" >
          <h2>Complete Reservation</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div >
        {/* message */}
        < div className="booking-modal__message" >
          <h4>
            <i className="fa-solid fa-circle-info"></i>
            Ao completar essa reserva, você irá receber um email com código de confirmação de reserva
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
                    {pickTime} /{" "}
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
                    {dropTime} /{" "}
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
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Local de Devolução</h6>
                  <p>{dropOff}</p>
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
  );
}

export default BookCar;
