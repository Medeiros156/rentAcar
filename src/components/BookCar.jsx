import { useEffect, useState } from "react";
import Modal from './Modal'


function BookCar() {
  const [modal, setModal] = useState(false);

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");



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
  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);


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



  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}


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
                    placeholder="dd/mm/yyyy"
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

      <Modal
        modal={modal}
        openModal={openModal}
        carType={carType}
        pickUp={pickUp}
        dropOff={dropOff}
        pickTime={pickTime}
        dropTime={dropTime}
        confirmBooking={confirmBooking}
        carImg={carImg}
      />


    </>
  );
}

export default BookCar;
