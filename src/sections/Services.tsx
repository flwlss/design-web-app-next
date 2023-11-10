import { meeting, services } from "@/common/constants";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__featuresWrapper">
        <div className="services__features">
          <h1>услуги и цены</h1>
          {services.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.subtitle}</h2>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="services__meetingWrapper">
        <h1>С чего начать с нами работу</h1>
        <div className="services__meeting">
          {meeting.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.subtitle}</h2>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
