import React, { useState } from "react";
import { Image, Card, Col, Stack } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Comments from "./Comments";
import { testimonials } from "./data";

const testimonialItemStyle = {
  fontStyle: "italic",
  margin: "0 15px 15px 15px",
  background: "#E6D7FF",
  position: "relative",
  marginBottom: 35,
  borderRadius: 25,
  boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)",
  border: 0
};

const testimonialItemAfter = {
  content: "",
  width: 0,
  height: 0,
  borderTop: "20px solid #E6D7FF",
  borderRight: "20px solid transparent",
  borderLeft: "20px solid transparent",
  position: "absolute",
  bottom: -20,
  left: "calc(50% - 20px)"
};
function Testimonial({ testimonial }) {
  const [truncate, setToggleTruncate] = useState(true);
  const toggleTruncate = () => {
    setToggleTruncate(!truncate);
  };
  const textStyle = {
    maxWidth: "100%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 5,
    overflow: "hidden",
    textOverflow: "ellipsis"
  };

  return (
    <Col className="text-center">
      <Card style={testimonialItemStyle}>
        <div style={testimonialItemAfter}></div>
        <Card.Body>
          <Stack direction="horizontal" gap={2}>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              style={{ alignSelf: "flex-start", color: "#D2AFFF" }}
              className="h4"
            />
            <p
              onClick={toggleTruncate}
              style={truncate ? textStyle : null}
              className="mb-0"
            >
              {testimonial.testimonial}
            </p>
            <FontAwesomeIcon
              icon={faQuoteRight}
              style={{ alignSelf: "flex-end", color: "#D2AFFF" }}
              className="h4 mb-0"
            />
          </Stack>
        </Card.Body>
      </Card>
      <Image
        src="https://i.ibb.co/JmqJgry/9-E07-EA27-3-AAA-49-D2-8-BE3-EFB5-EF9-D61-DE.png"
        roundedCircle
        width={90}
        style={{ backgroundColor: "#dee2e6" }}
        className="my-3 mx-auto"
      />
      <h5>{testimonial.name}</h5>
      <h6 className="text-secondary">{testimonial.title}</h6>
    </Col>
  );
}
function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div>
        <p className="mt-3 mb-4">
          Discover what others have to say about their experiences working with
          me. Read testimonials from clients and colleagues who have witnessed
          the quality and dedication I bring to every project. Their words
          reflect the passion and expertise that I pour into crafting
          exceptional web experiences.
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
      <Comments />
    </>
  );
}

export default Testimonials;
