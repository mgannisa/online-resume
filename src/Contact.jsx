import React, { useEffect, useState } from "react";
import { Col, Row, Card, Button, Form, Stack } from "react-bootstrap";
import mapboxgl from "mapbox-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactInfo } from "./data";

const iconStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 44,
  height: 44,
  background: "#d2afff",
  borderRadius: "50%",
  border: "1px solid #d2afff"
};

const cardStyle = {
  backgroundColor: "#E6D7FF",
  border: 0,
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  borderRadius: 25
};

function Contact() {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2FoaWx0aGFrYXJlNTIxIiwiYSI6ImNrbjVvMTkzNDA2MXQydnM2OHJ6aHJvbXEifQ.z5aEqRBTtDMWoxVzf3aGsg";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [106.7899, -6.5946],
      zoom: 12
    });
    return () => map.remove();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    sender: "",
    subject: "",
    body: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const { name, sender, subject, body } = formData;
    const mailtoLink = `mailto:annisamga@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=Hello Mega, my name is ${encodeURIComponent(
      name
    )}. I want to ask ${encodeURIComponent(body)}&from=${encodeURIComponent(
      sender
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <p className="mt-3 mb-4">
        Feel free to reach out if you have any questions, need assistance, or
        want to share any suggestions or improvements related to myself. You can
        contact me via email at my personal email address, and I'll be happy to
        assist you.
      </p>
      <Row>
        <Col md={5} className="mb-4">
          <Card style={cardStyle} className="p-2">
            <Card.Body>
              {contactInfo.map((info, index) => (
                <Stack
                  key={index}
                  direction="horizontal"
                  gap={4}
                  className="align-items-start"
                >
                  <div style={iconStyle}>
                    <FontAwesomeIcon
                      icon={info.icon}
                      style={{ color: "#FFFFFF" }}
                    />
                  </div>
                  <Stack xs={9}>
                    <h6 className="mb-0 text-bold">{info.label}:</h6>
                    <p className="text-secondary">
                      <small>{info.val}</small>
                    </p>
                  </Stack>
                </Stack>
              ))}
              <div
                className="mt-3"
                id="map"
                style={{ width: "100%", height: "282px" }}
              ></div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={7}>
          <Card style={cardStyle} className="p-2">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="sender">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="name@example.com"
                    name="sender"
                    value={formData.sender}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="subject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="body">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    style={{ height: 135 }}
                    placeholder="Your message..."
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="text-center" controlId="submit">
                  <Button
                    type="submit"
                    variant="light"
                    className="text-bold"
                    style={{
                      backgroundColor: "#D2AFFF",
                      borderColor: "#D2AFFF",
                      borderRadius: 50
                    }}
                  >
                    Send Message
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Contact;
