interface IContactsInfo {
  hour: string;
  email: string;
}

const ContactsInfo = ({ hour, email }: IContactsInfo) => {
  return (
    <div className="contacts__info">
      <div>
        <h2>{"часы\nработы:"}</h2>
        <p>{hour}</p>
      </div>
      <div>
        <h2>почта:</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ContactsInfo;
