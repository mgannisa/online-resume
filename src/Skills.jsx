import React, { useEffect, useState } from "react";
import { Col, Row, ProgressBar, Stack, Card } from "react-bootstrap";
import Swot from "./Swot";
import { skillsData } from "./data";

function SkillSection({ label, percentage, styleIdx }) {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    let animationFrameId;
    const targetPercentage = percentage;

    const animateProgressBar = () => {
      if (currentPercentage < targetPercentage) {
        setCurrentPercentage((prevPercentage) => {
          const increment = 10;
          return Math.min(prevPercentage + increment, targetPercentage);
        });

        animationFrameId = requestAnimationFrame(animateProgressBar);
      }
    };

    animateProgressBar();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // eslint-disable-line

  return (
    <Row>
      <Col className={styleIdx === 1 ? "my-3" : ""}>
        <Stack direction="horizontal">
          <strong>
            <small>{label}</small>
          </strong>
          <strong className="ms-auto">
            <small>{percentage}%</small>
          </strong>
        </Stack>
        <ProgressBar now={currentPercentage} />
      </Col>
    </Row>
  );
}

function Skills() {
  return (
    <>
      <div className="skills">
        <p className="mt-3 mb-4">
          My commitment to staying up-to-date with the latest web development
          trends ensures that I can tackle projects with creativity and
          technical expertise. I am always eager to expand my skill set further
          to deliver top-notch solutions for any challenge. I take pride in my
          diverse skill set, which empowers me to excel in the ever-evolving
          field of web development.
        </p>
        <Card
          className="p-0"
          style={{
            borderRadius: 25,
            border: 0,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          }}
        >
          <Card.Body className="p-4">
            <Row>
              <Col>
                {skillsData.slice(0, 3).map((skill, index) => (
                  <SkillSection
                    key={index}
                    label={skill.label}
                    percentage={skill.percentage}
                    styleIdx={index}
                  />
                ))}
              </Col>
              <Col>
                {skillsData.slice(3).map((skill, index, progress) => (
                  <SkillSection
                    key={index}
                    label={skill.label}
                    percentage={skill.percentage}
                    styleIdx={index}
                  />
                ))}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
      <Swot />
    </>
  );
}

export default Skills;
