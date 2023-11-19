import Container from "@/components/Container";
import { Telegram, Whatsapp } from "@/svgs";

async function getTelegram() {
  const res = await fetch("http://localhost:1337/api/telegram");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getWhatsapp() {
  const res = await fetch("http://localhost:1337/api/whatsapp");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Footer = async () => {
  const currentYear = new Date().getFullYear();
  const telegram = await getTelegram();
  const whatsapp = await getWhatsapp();

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
            <a href={telegram.data.attributes.telegram} target="_blank">
              <Telegram className="footer__socials__svg telegram" />
            </a>
            <a href={whatsapp.data.attributes.whatsapp} target="_blank">
              <Whatsapp className="footer__socials__svg whatsapp" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
