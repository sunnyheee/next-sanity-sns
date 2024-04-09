import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desk: {
    breakpoint: { max: 4000, min: 576 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 5,
  },
};

const ScrollableBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <Carousel containerClass="w-full gap-2 flex" responsive={responsive}>
      {children}
    </Carousel>
  );
};

export default ScrollableBar;
