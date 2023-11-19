import MeetingItem from "@/components/MeetingItem";
import ServiceItem from "@/components/ServiceItem";

const Services = async ({
  services,
  meetings,
}: {
  services: Service[];
  meetings: Meeting[];
}) => {
  return (
    <section id="services" className="services">
      <div className="services__featuresWrapper">
        <div className="services__features">
          <h1>услуги и цены</h1>
          {services.map((item: Service, index: number) => {
            return (
              <ServiceItem
                key={index}
                title={item.attributes.title}
                description={item.attributes.description}
              />
            );
          })}
        </div>
      </div>
      <div className="services__meetingWrapper">
        <h1>С чего начать с нами работу</h1>
        <div className="services__meeting">
          {meetings.map((item, index) => {
            return (
              <MeetingItem
                key={index}
                title={item.attributes.title}
                description={item.attributes.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
