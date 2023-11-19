import MeetingItem from "@/components/MeetingItem";
import ServiceItem from "@/components/ServiceItem";

async function getServices() {
  const res = await fetch("http://localhost:1337/api/services");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getData() {
  const res = await fetch("http://localhost:1337/api/meetings");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Services = async () => {
  const services = await getServices();
  const data = await getData();

  return (
    <section id="services" className="services">
      <div className="services__featuresWrapper">
        <div className="services__features">
          <h1>услуги и цены</h1>
          {services.data.map((item: Service, index: number) => {
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
          {data.data.map((item: Meeting, index: number) => {
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
