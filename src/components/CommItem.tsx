interface ICommItem {
  name: string;
  phone: string;
}

const CommItem = ({ name, phone }: ICommItem) => {
  return (
    <div>
      <h2>{phone}</h2>
      <p>{name}</p>
    </div>
  );
};

export default CommItem;
