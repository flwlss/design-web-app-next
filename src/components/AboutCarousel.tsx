"use client";
import { employees } from "@/common/constants";
import { ArrowInCircle } from "@/svgs";
import { Carousel } from "react-responsive-carousel";

const AboutCarousel = () => {
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
