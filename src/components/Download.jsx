import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Faça a download do nosso aplicativo em seu celular Android ou iOS!</h2>
            <p>
              Com a opção de Check-in Express do nosso aplicativo, você ganha tempo na retirada do carro e 100 pontos no RentaCar Fidelidade: é só clicar em CHEGUEI a caminho da agência.
            </p>
            <div className="download-text__btns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
