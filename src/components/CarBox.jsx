import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);

  const handleScroll = (event) => {
    event.preventDefault();
    const section = document.querySelector("#booking-section");
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
          {/* car */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>R${car.price}</span>/ por dia
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Modelo</span>
                <span>{car.model}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Marca</span>
                <span>{car.mark}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Ano</span>
                <span>{car.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Portas</span>
                <span>{car.doors}</span>
              </div>

              <div className="pick-description__table__col">
                <span>AC</span>
                <span>{car.air}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Transmissão</span>
                <span>{car.transmission}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Combustível</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section" onClick={handleScroll}>
              Reserve agora
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
