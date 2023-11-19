interface IServiceItem {
  title: string;
  description: string;
}

const ServiceItem = ({ title, description }: IServiceItem) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;
