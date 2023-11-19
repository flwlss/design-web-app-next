import CommItem from "@/components/CommItem";
import ContactsInfo from "@/components/ContactsInfo";
import Container from "@/components/Container";

const Contacts = async ({
  hour,
  email,
  employees,
}: {
  hour: ContactInfo;
  email: ContactInfo;
  employees: Employee[];
}) => {
  return (
    <section id="contacts" className="contacts">
      <Container>
        <>
          <h1 className="contacts__title">контакты</h1>
          <div className="contacts__wrapper">
            <ContactsInfo hour={hour} email={email} />
            <div className="contacts__comm">
              {employees
                .map((item, index) => {
                  return (
                    <CommItem
                      key={index}
                      name={item.attributes.name}
                      phone={item.attributes.phone}
                    />
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
