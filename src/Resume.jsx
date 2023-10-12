import { Col, Row, Accordion, Stack } from "react-bootstrap";
import { educationData, experienceData } from "./data";

const resumeItemStyle = {
  paddingLeft: "1rem",
  marginTop: -2,
  borderLeft: "2px solid #d2afff",
  position: "relative"
};
const resumeItemBefore = {
  content: "",
  position: "absolute",
  width: 16,
  height: 16,
  borderRadius: 50,
  left: -9,
  top: 0,
  background: "#ffffff",
  border: "2px solid #d2afff"
};
const highlightText = {
  background: "#e6d7ff",
  padding: "5px 15px",
  width: "fit-content",
  fontWeight: 600,
  marginBottom: 10
};
function Resume() {
  return (
    <>
      <p className="mt-3 mb-4">
        I'm a dedicated and accomplished User Interface Engineer (UI) and
        Front-End Developer with over 5 years of professional experience. My
        passion lies in creating engaging and intuitive web interfaces. I take
        great pride in my ability to produce elegant and efficient code, and my
        goal is to transform design visions into seamless and dynamic websites.
      </p>
      <Row>
        <Col md={6}>
          <h5 className="text-bold">Summary</h5>
          <div className="pb-0 mb-4" style={resumeItemStyle}>
            <div style={resumeItemBefore}></div>
            <h6 className="text-bold">MEGA ANNISA</h6>
            <p>
              <em>
                As a passionate and results-driven User Interface Engineer &
                Front-End Developer with 5+ years of experience, I specialize in
                crafting engaging and user-friendly web experiences. With a
                deep-rooted love for clean and elegant code, I am dedicated to
                transforming design concepts into seamless and interactive
                websites.
              </em>
            </p>
            <ul className="px-3">
              <li>Bogor, West Java, ID</li>
              <li>(62) 857-1835-1194</li>
              <li>annisamga@gmail.com</li>
            </ul>
          </div>
          <h5 className="text-bold">Education</h5>
          <Accordion defaultActiveKey={0} className="mb-4">
            {educationData.map((val, index) => (
              <Accordion.Item
                eventKey={index}
                style={resumeItemStyle}
                key={index}
              >
                <div style={resumeItemBefore}></div>
                <Accordion.Header>
                  <Stack>
                    <h6 className="text-bold">{val.title}</h6>
                    <h6 style={highlightText}>{val.year}</h6>
                    <p
                      className={
                        index === educationData.length - 1 ? "mb-0" : ""
                      }
                    >
                      <em>{val.subtitle}</em>
                    </p>
                  </Stack>
                </Accordion.Header>
                <Accordion.Body className="p-0">
                  {val.description}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
        <Col md={6}>
          <h5 className="text-bold">Professional Experience</h5>
          <Accordion defaultActiveKey={0}>
            {experienceData.map((val, index) => (
              <Accordion.Item
                eventKey={index}
                style={resumeItemStyle}
                key={index}
              >
                <div style={resumeItemBefore}></div>
                <Accordion.Header>
                  <Stack>
                    <h6 className="text-bold">{val.title}</h6>
                    <h6 style={highlightText}>{val.year}</h6>
                    <p
                      className={
                        index === educationData.length - 1 ? "mb-0" : ""
                      }
                    >
                      <em>{val.subtitle}</em>
                    </p>
                  </Stack>
                </Accordion.Header>
                <Accordion.Body className="p-0">
                  {val.description}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </>
  );
}

export default Resume;
