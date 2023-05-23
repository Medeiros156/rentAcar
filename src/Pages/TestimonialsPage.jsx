import Banner2 from "../components/Banner2";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Testimonials from "../components/Testimonials";

function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testemunhos" />
        <Testimonials />
        <Banner2 />
        <Footer />
      </section>
    </>
  );
}

export default TestimonialsPage;
