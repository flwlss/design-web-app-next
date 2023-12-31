import AboutCarousel from "@/components/AboutCarousel";
import Container from "@/components/Container";

const About = async ({ employees }: { employees: Employee[] }) => {
  return (
    <section id="about" className="about">
      <Container>
        <div className="about__wrapper">
          <div className="about__description">
            <h1>о нас</h1>
            <h2>Студия архитектуры и дизайна</h2>
            <p>
              Предлагаем самый широкий спектр услуг в сфере концепций и
              реализаций архитектурных и интерьерных решений. Наша команда
              сможет реализовать ваши самые смелые дизайнерские и архитектурные
              идеи, не только как эксклюзивный проект, но и воплотить его в
              жизнь.
              <br />
              <br />
              Внушительный опыт работы в области архитектуры и интерьера жилых и
              общественных помещений, позволяет нам с легкостью решать любые
              поставленные задачи в разных уголках мира и всегда быть в центре
              актуальных тенденций архитектуры и дизайнов интерьера. Мы создаём
              стильную, современную и запоминающуюся архитектуру и дизайн, в
              которых Вам будет комфортно жить и работать. Путем индивидуального
              подхода, мы выстраиваем крепкие и долгосрочные партнерские
              отношения с каждым нашим клиентом.
            </p>
          </div>
          <div className="about__carousel">
            <AboutCarousel employees={employees} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
