import About from "@/sections/About";
import Contacts from "@/sections/Contacts";
import Header from "@/sections/Header";
import Portfolio from "@/sections/Portfolio";
import Progress from "@/sections/Progress";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Progress />
      <Portfolio />
      <Services />
      <Contacts />
    </>
  );
}
