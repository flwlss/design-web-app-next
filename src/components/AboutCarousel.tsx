"use client";
import { ArrowInCircle } from "@/svgs";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";

interface IAboutCarousel {
  employee: Employee[];
}

const AboutCarousel = ({ employee }: IAboutCarousel) => {
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
      {employee.map((item, index) => {
        return <CarouselItem key={index} employee={item} />;
      })}
    </Carousel>
  );
};

export default AboutCarousel;
