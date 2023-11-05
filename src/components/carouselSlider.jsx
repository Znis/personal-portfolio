import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

export default function CarouselSlider({ isPhone, carouselImgSrc }) {
  const imgClass = isPhone
    ? "max-h-[13.4rem] max-w-[6rem] rounded-[10px] object-contain"
    : "max-w-[18.5rem] max-h-[11.35rem] object-contain";

  const carouselItems = carouselImgSrc.map((img) => (
    <div key={img}>
      {" "}
      <img className={imgClass} src={img} />{" "}
    </div>
  ));

  return (
    <Carousel
      autoPlay={2}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
    >
      {carouselItems}
    </Carousel>
  );
}
