import About from "@/sections/About";
import Contacts from "@/sections/Contacts";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Portfolio from "@/sections/Portfolio";
import Progress from "@/sections/Progress";
import Services from "@/sections/Services";

interface IHomePage {
  services: Service[];
  meetings: Meeting[];
  hour: ContactInfo;
  email: ContactInfo;
  employees: Employee[];
  telegram: ContactInfo;
  whatsapp: ContactInfo;
}

const HomePage = (props: IHomePage) => {
  const { services, meetings, hour, email, employees, telegram, whatsapp } =
    props;
  return (
    <>
      <Header />
      <About />
      <Progress />
      <Portfolio />
      <Services services={services} meetings={meetings} />
      <Contacts employees={employees} hour={hour} email={email} />
      <Footer telegram={telegram} whatsapp={whatsapp} />
    </>
  );
};

export default HomePage;
