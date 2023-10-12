import { Col, Row, Image, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { infos } from "./data";

const About = () => {
  return (
    <>
      <p className="mt-3 mb-4">
        I am a passionate and driven Software Engineer specializing in User
        Interface and Front-End Development. With a Bachelor's degree in
        Computer Science, I have honed my skills to create engaging and
        user-friendly web interfaces that leave a lasting impression.
      </p>
      <Row>
        <Col sm={4}>
          <Image
            src="https://i.ibb.co/1zB4NF6/E2-A667-C5-A7-E5-4962-9882-26-CE779-BD58-B.png"
            style={{
              width: "100%",
              backgroundColor: "#E6D7FF",
              borderRadius: 50,
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            }}
            className="mb-4"
          />
        </Col>
        <Col sm={8}>
          <h5 className="text-bold">
            Software Engineer User Interface & Front End Developer.
          </h5>
          <p>
            In my work, I am dedicated to crafting seamless digital experiences
            for users. I believe in the power of technology to make a positive
            impact, and I am committed to staying at the forefront of the
            ever-evolving web development landscape.
          </p>
          <Row className="mb-3">
            <Col md={6}>
              {infos.slice(0, 3).map((info, index) => (
                <Stack key={index} direction="horizontal" gap={2}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#D2AFFF" }}
                  />
                  <span className="text-bold">{info.title}: </span>
                  {info.value}
                </Stack>
              ))}
            </Col>
            <Col md={6}>
              {infos.slice(3).map((info, index) => (
                <Stack key={index} direction="horizontal" gap={2}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#D2AFFF" }}
                  />
                  <span className="text-bold">{info.title}: </span>
                  {info.value}
                </Stack>
              ))}
            </Col>
          </Row>
          <p>
            My approach combines creativity with a strong foundation in software
            engineering. I excel in designing and implementing intuitive user
            interfaces while ensuring they are performant and responsive. I
            thrive in collaborative environments, leveraging teamwork to bring
            innovative ideas to life.
          </p>
          <p>
            I am always eager to take on new challenges and expand my skill set.
            Whether it's optimizing web performance, mastering the latest
            front-end frameworks, or solving complex design problems, I embrace
            opportunities for growth.
          </p>
          <p className="mb-0">
            With a keen eye for detail and a relentless pursuit of excellence, I
            am ready to contribute my expertise to projects that demand
            exceptional UI/UX solutions.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default About;
