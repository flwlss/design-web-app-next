"use client";
import { employees } from "@/common/constants";
import { Carousel } from "react-responsive-carousel";

const AboutCarousel = () => {
  return (
    <Carousel
      swipeable={false}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      {employees.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={item.image} />
            <h1>{item.name}</h1>
            <h2>{item.post}</h2>
            <p>{item.description}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default AboutCarousel;
