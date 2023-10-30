import { socials } from "@/common/constants";
import Container from "@/components/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper">
          <div className="footer__copyright">
            <img src="/images/logo.svg" alt="logo" />
            <p className="footer__copyright__text">
              {`© ${currentYear} ARCHITECTURE DESIGN\nВсе права защищены`}
            </p>
          </div>
          <div className="footer__socials">
            {socials.map((item) => {
              return (
                <a key={item.id} href={item.href} target="_blank">
                  <img src={item.svgSrc} alt={item.svgSrc} />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
