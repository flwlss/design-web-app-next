import Container from "@/components/Container";
import { Telegram, Whatsapp } from "@/svgs";

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
            <a href="https://t.me/fooyzi" target="_blank">
              <Telegram className="footer__socials__svg telegram" />
            </a>
            <a href="https://wa.me/+79234792799" target="_blank">
              <Whatsapp className="footer__socials__svg whatsapp" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
