import React, { useRef } from "react";
import { Button, Carousel, Image, Space, Typography } from "antd";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Photo from "../../assets/sample-image-1.jpg";

const DemoImage = () => {
  const sliderRef = useRef();

  const prevSlide = () => {
    sliderRef.current.prev();
  };
  const nextSlide = () => {
    sliderRef.current.next();
  };
  // const setting = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  const images = [Photo, Photo, Photo];

  return (
    <div className="demoImage">
      {/* <Slider {...setting}>
        {images.map((item, index) => (
          <div className="imageSize" key={index}>
            <Image
              className="photoSize"
              src={item}
              alt="image"
              preview={false}
            />
          </div>
        ))}
      </Slider> */}
      <Carousel
        autoplay
        autoplaySpeed={5000}
        dots={false}
        ref={sliderRef}
        style={{ height: "100%" }}
      >
        {images.map((item, index) => (
          <div className="imageSize" key={index}>
            <Image
              className="photoSize"
              src={item}
              alt="image"
              preview={false}
            />
          </div>
        ))}
      </Carousel>
      <div className="box">
        <Space
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "80%" }}>
            <Typography.Title level={4}>
              Integrative & Personalise mental well-bring
            </Typography.Title>
            <Typography.Paragraph>
              Accessible, specialised Integrative mental healthcare in seconds
            </Typography.Paragraph>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: 15 }}>
            <Button
              className="sliderButton"
              type="primary"
              size="large"
              shape="circle"
              onClick={prevSlide}
            >
              &lt;
            </Button>
            <Button
              className="sliderButton"
              type="primary"
              size="large"
              shape="circle"
              onClick={nextSlide}
            >
              &gt;
            </Button>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default DemoImage;
