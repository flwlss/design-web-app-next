import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <header id="header" className="header">
      <Navbar />
      <Container>
        <div className="header__content">
          <h1>Современная архитектура</h1>
          <h2>воплоти свою мечту в жизнь</h2>
        </div>
      </Container>
    </header>
  );
};

export default Header;
