import Container from "./Container";

const PortfolioPage = () => {
  return (
    <div className="portfolioPage">
      <div className="portfolioPage__opacity">
        <div className="portfolioPage__opacity__basics">
          <span />
          <h2>design basics</h2>
          <span />
        </div>
        <h1>Дизайн интерьера</h1>
        <p>
          Современный дизайн интерьера — это решения задач бюджета,
          функциональности, красоты и многого другого. В создании дизайна
          интерьера мы используем аналитический подход, он позволяет нам
          проектировать, как частное жилье, так и офисы, кафе, рестораны, бары,
          галереи, музеи и т. д. Мы отталкиваемся от пространства помещения и
          тех задач, которые перед нами ставит клиент. Думаем о том, как
          рационально использовать бюджет на реализацию и создать уникальный
          дизайн под конкретную задачу.
        </p>
      </div>
      <div className="portfolioPage__left">
        <img src="/images/portfolio/designLeft.jpg" alt="" />
      </div>
      <div className="portfolioPage__right">
        <img src="/images/portfolio/designRight.jpg" alt="" />
      </div>
    </div>
  );
};

export default PortfolioPage;
