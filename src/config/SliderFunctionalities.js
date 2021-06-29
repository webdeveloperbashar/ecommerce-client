import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SliderFunctionalities = ({
  children,
  sliderArrows,
  sliderSpeed,
  sliderTransition,
}) => {
  return (
    <>
      <Carousel
        swipeable={false}
        draggable={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={sliderSpeed}
        arrows={sliderArrows}
        keyBoardControl={true}
        customTransition={sliderTransition}
        transitionDuration={1800}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {children}
      </Carousel>
    </>
  );
};

export default SliderFunctionalities;
