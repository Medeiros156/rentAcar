import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Perguntas frequentes</h2>

            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. Quais são os requisitos para alugar um carro no Brasil?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nemo eum repudiandae facere libero, exercitationem iste, ipsa assumenda id cum quis non, magnam dolore quos fugit possimus repellendus magni dolor.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2.
                    Posso alugar um veículo sem ter cartão de crédito?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nemo eum repudiandae facere libero, exercitationem iste, ipsa assumenda id cum quis non, magnam dolore quos fugit possimus repellendus magni dolor.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3.
                    O que fazer se meu voo atrasar ou antecipar?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nemo eum repudiandae facere libero, exercitationem iste, ipsa assumenda id cum quis non, magnam dolore quos fugit possimus repellendus magni dolor.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
