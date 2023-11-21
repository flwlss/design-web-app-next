import Container from "@/components/Container";
import HeaderButton from "@/components/HeaderButton";
import Navbar from "@/components/Navbar";

const Header = ({ employee }: { employee: Employee }) => {
  return (
    <header id="header" className="header">
      <Navbar employee={employee} />
      <Container>
        <div className="header__content">
          <h1>Современная архитектура</h1>
          <h2>воплоти свою мечту в жизнь</h2>
          <HeaderButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
