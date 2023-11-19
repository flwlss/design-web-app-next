"use client";
import { ArrowInCircle } from "@/svgs";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";

const AboutCarousel = ({ employees }: { employees: Employee[] }) => {
  return (
    <Carousel
      swipeable={false}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      showArrows={false}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <ArrowInCircle
            onClick={clickHandler}
            style={{ transform: "translate(0, -50%) scale(-1)" }}
            className="about__carousel__button"
          />
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <ArrowInCircle
            onClick={clickHandler}
            style={{ right: 0 }}
            className="about__carousel__button"
          />
        );
      }}
    >
      {employees.map((item, index) => {
        return <CarouselItem key={index} employee={item} />;
      })}
    </Carousel>
  );
};

export default AboutCarousel;
