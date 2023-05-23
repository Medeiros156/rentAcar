import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { CAR_DATA } from "../components/CarData";

import { Link } from "react-router-dom";
import Banner2 from "../components/Banner2";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

function Models() {
  const [modal, setModal] = useState(false);
  const [carType, setCarType] = useState(false);

  const openModal = (f, name) => {
    f.preventDefault();
    console.log(name)
    setCarType(name)
    setModal(!modal);
    const modalDiv = document.querySelector(".booking-modal");
    modalDiv.scroll(0, 0);
  }

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);
  return (
    <>
      <section className="models-section">
        <HeroPages name="Modelos de carros" />
        <div className="container">
          <div className="models-div">

            {CAR_DATA.map(e => {
              return (
                <div key={e[0].name} className="models-div__box">
                  <div className="models-div__box__img">
                    <img src={e[0].img} alt="car_img" />
                    <div className="models-div__box__descr">
                      <div className="models-div__box__descr__name-price">
                        <div className="models-div__box__descr__name-price__name">
                          <p>{e[0].name}</p>
                          <span>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                        </div>
                        <div className="models-div__box__descr__name-price__price">
                          <h4>R${e[0].price}</h4>
                          <p>por dia</p>
                        </div>
                      </div>
                      <div className="models-div__box__descr__name-price__details">
                        <span>
                          <i className="fa-solid fa-car-side"></i> &nbsp; Fiat
                        </span>
                        <span style={{ textAlign: "right" }}>
                          {e[0].doors} &nbsp; <i className="fa-solid fa-car-side"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-car-side"></i> &nbsp; {e[0].transmission}
                        </span>
                        <span style={{ textAlign: "right" }}>
                          {e[0].fuel} &nbsp; <i className="fa-solid fa-car-side"></i>
                        </span>
                      </div>
                      <div className="models-div__box__descr__name-price__btn">
                        <div onClick={(f) => {
                          openModal(f, e[0].name)
                        }
                        } >
                          Agende seu aluguel
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )
            })}








          </div>
        </div>
        <Modal
          modal={modal}
          openModal={openModal}
          carType={carType}

        />
        <Banner2 />
        <Footer />
      </section>
    </>
  );
}

export default Models;
