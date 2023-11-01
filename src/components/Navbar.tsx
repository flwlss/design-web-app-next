import { employees, navItems } from "@/common/constants";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Container>
        <div className="navbar__wrapper">
          <div className="navbar__logoWrapper">
            <img src="/images/logo.svg" alt="" />
            <p>{`architecture\ndesign`}</p>
          </div>
          <ul className="navbar__list">
            {navItems.map((item) => {
              return <li key={item.id}>{item.title}</li>;
            })}
            <li>{employees[0].phone}</li>
          </ul>

          <div className="burger-menu">
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-btn" htmlFor="menu-toggle">
              <span />
            </label>
            <ul className="menubox">
              {navItems.map((item) => {
                return <li key={item.id}>{item.title}</li>;
              })}
              <li>{employees[0].phone}</li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
