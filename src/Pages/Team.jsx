import Banner2 from "../components/Banner2";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/1.jpg";
import Person2 from "../images/team/2.jpg";
import Person3 from "../images/team/3.jpg";
import Person4 from "../images/team/4.jpg";
import Person5 from "../images/team/5.jpg";
import Person6 from "../images/team/6.jpg";

function Team() {
  const TEAM = [
    { img: Person1, name: "Joao Costa", job: "Vendedor" },
    { img: Person2, name: "Carla Dolores", job: "Vendedora" },
    { img: Person3, name: "Joana Rosa", job: "Fotografa" },
    { img: Person4, name: "Marcos Salmos", job: "Gerente de vendas" },
    { img: Person5, name: "Nathan Rico", job: "Diretor" },
    { img: Person6, name: "Catarina Lima", job: "CEO" },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Nossa Equipe" />
        <div className="cotnainer">
          <div className="team-container">
            {TEAM.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Banner2 />
        <Footer />
      </section>
    </>
  );
}

export default Team;
