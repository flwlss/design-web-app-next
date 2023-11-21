import BlueButton from "./BlueButton";

const ContactsInfo = ({
  hour,
  email,
}: {
  hour: ContactInfo;
  email: ContactInfo;
}) => {
  return (
    <div className="contacts__info">
      <div>
        <h2>{"часы\nработы:"}</h2>
        <p>{hour.attributes.hour}</p>
      </div>
      <div>
        <h2>почта:</h2>
        <p>{email.attributes.email}</p>
      </div>
      <BlueButton />
    </div>
  );
};

export default ContactsInfo;
