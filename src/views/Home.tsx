import Loader from "@/components/Loader";
import About from "@/sections/About";
import Contacts from "@/sections/Contacts";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Portfolio from "@/sections/Portfolio";
import Progress from "@/sections/Progress";
import Services from "@/sections/Services";

interface IHome {
  services: Service[];
  meetings: Meeting[];
  hour: ContactInfo;
  email: ContactInfo;
  employees: Employee[];
  telegram: ContactInfo;
  whatsapp: ContactInfo;
}

const Home = (props: IHome) => {
  const { services, meetings, hour, email, employees, telegram, whatsapp } =
    props;

  return (
    <>
      {/* <Loader /> */}
      <Header employee={employees[0]} />
      <About employees={employees} />
      <Progress />
      <Portfolio />
      <Services services={services} meetings={meetings} />
      <Contacts employees={employees} hour={hour} email={email} />
      <Footer telegram={telegram} whatsapp={whatsapp} />
    </>
  );
};

export default Home;
