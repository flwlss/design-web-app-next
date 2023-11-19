import { BACKEND_URL } from "@/common/constants";

interface ICarouselItem {
  employee: Employee;
}

const CarouselItem = ({ employee }: ICarouselItem) => {
  return (
    <div>
      <img
        src={`${BACKEND_URL}${employee.attributes.image.data.attributes.url}`}
        alt={employee.attributes.name}
      />
      <h1>{employee.attributes.name}</h1>
      <h2>{employee.attributes.post}</h2>
      <p>{employee.attributes.description}</p>
    </div>
  );
};

export default CarouselItem;
