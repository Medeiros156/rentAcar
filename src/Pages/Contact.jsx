import Banner2 from "../components/Banner2";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contato" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Precisa de informações adicionais?</h2>
              <p>
                Um profissional multifacetado habilidoso em múltiplas áreas de pesquisa, desenvolvimento, bem como um especialista em aprendizado. Mais de 20 anos de experiência.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (12) 3456-7869
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                rentacar@email.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Belo Horizonte,
                Brasil
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Nome Completo <b>*</b>
                </label>
                <input type="text" placeholder='"Joao da Silva"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Escreva sua menssagem <b>*</b>
                </label>
                <textarea placeholder="Escreva aqui..."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Enviar
                  Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
        <Banner2 />
        <Footer />
      </section>
    </>
  );
}

export default Contact;
