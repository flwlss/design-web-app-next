import CommItem from "@/components/CommItem";
import ContactsInfo from "@/components/ContactsInfo";
import Container from "@/components/Container";

async function getHour() {
  const res = await fetch("http://localhost:1337/api/hour");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getEmail() {
  const res = await fetch("http://localhost:1337/api/email");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getEmployees() {
  const res = await fetch("http://localhost:1337/api/employees");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Contacts = async () => {
  const hour = await getHour();
  const email = await getEmail();
  const employee = await getEmployees();

  return (
    <section id="contacts" className="contacts">
      <Container>
        <>
          <h1 className="contacts__title">контакты</h1>
          <div className="contacts__wrapper">
            <ContactsInfo
              hour={hour.data.attributes.hour}
              email={email.data.attributes.email}
            />
            <div className="contacts__comm">
              {employee.data
                .map((item: Employee, index: number) => {
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
