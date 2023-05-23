import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Por que escolher a RentaCar? </h4>
                <h2>Melhores preços e Melhores condições</h2>
                <p>
                  Somos uma das maiores e mais completas plataformas de mobilidade do mundo. Trazemos na nossa história resultados extraordinários, fruto da dedicação de mais de 17 mil colaboradores empenhados em encantar pessoas e escrever com elas histórias incríveis. Com muita ousadia, protagonismo e inovação, oferecemos as melhores soluções de mobilidade, gerando valor para nossos colaboradores, investidores, clientes, parceiros e toda sociedade.
                </p>
                <a href="#home">
                  Veja mais detalhes &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Frota nova e completa;</h4>
                    <p>
                      Locação Carbon Free com a locação Carbon Free a Movida neutraliza as emissões de CO2 geradas durante a locação;
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Tudo incluido no preço</h4>
                    <p>
                      Carros completos com um único valor fixo
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Sem taxas extras</h4>
                    <p>
                      Pagamento após a confirmação da retirada e nenhuma taxa extra cobrada.
                    </p>
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

export default ChooseUs;
