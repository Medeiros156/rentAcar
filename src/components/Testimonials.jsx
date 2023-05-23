import Img2 from "../images/testimonials/pfp1.jpeg";
import Img3 from "../images/testimonials/pfp2.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Opiniões</h4>
              <h2>Testemunhos de clientes</h2>
              <p>
                Veja opiniões de clientes da RentaCar
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "Foi a primeira vez que utilizei a RentaCar. Só tenho elogios a fazer e agradecer. Funcionários muito simpáticos e atenciosos. Tudo funcionou perfeitamente e sincronizado. Ao devolvermos o veículo, no Aeroporto Santos Dumont, já havia uma Van aguardando para o transporte até o Aeroporto. Parabéns! "
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Zé Ninguem</h4>
                      <p>Rio de Janeiro</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "Reservei o carro pelo app e chegando lá não tinha disponível o modelo que escolhi (era o mais barato), eles me deram outro carro, melhor e econômico, sem cobrar nada a mais. O atendimento foi excelente, desde o balcão até a retirada e devolução do carro no estacionamento. Estão de parabéns!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Maria Maria</h4>
                      <p>São Paulo</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
