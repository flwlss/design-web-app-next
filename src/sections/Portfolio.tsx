import Container from "@/components/Container";
import PortfolioPage from "@/components/PortfolioPage";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__wrapper">
        <Container>
          <div className="portfolio__buttons">
            <h1>дизайн интерьера</h1>
            <span />
            <h1>{`архитектурное\nпроектирование`}</h1>
            <span />
            <h1>фитодизайн</h1>
          </div>
        </Container>
      </div>
      <PortfolioPage />
    </section>
  );
};
export default Portfolio;
