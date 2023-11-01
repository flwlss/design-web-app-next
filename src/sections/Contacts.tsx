import { contactsInfo, employees } from "@/common/constants";
import Container from "@/components/Container";

const Contacts = () => {
  return (
    <section id="contacts" className="contacts">
      <Container>
        <>
          <h1 className="contacts__title">контакты</h1>
          <div className="contacts__wrapper">
            <div className="contacts__info">
              {contactsInfo.map((item) => {
                return (
                  <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="contacts__comm">
              {employees
                .map((item) => {
                  return (
                    <div key={item.id}>
                      <h2>{item.phone}</h2>
                      <p>{item.name}</p>
                    </div>
                  );
                })
                .slice(0, 3)}
            </div>
          </div>
        </>
      </Container>
    </section>
  );
};

export default Contacts;
