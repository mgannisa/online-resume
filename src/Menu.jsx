import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas, Image, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMediaData } from "./data";

function Menu({ routes }) {
  const location = useLocation();
  const navStyle = {
    position: "relative",
    padding: "0 1rem",
    fontWeight: 600,
    zIndex: 1
  };
  function navBeforeStyle(route) {
    if (location.pathname === route) {
      return {
        content: "",
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: 50,
        left: 0,
        top: 0,
        background: "#e6d7ff",
        zIndex: -1
      };
    }
  }
  function convertToString(path) {
    const string = path.replace("/", "");
    const convertedString = string.charAt(0).toUpperCase() + string.slice(1);

    return string === "" ? "About" : convertedString;
  }
  return (
    <Container style={{ maxWidth: 960 }}>
      <Navbar expand="sm" className="py-0 bg-body-tertiary mx-auto">
        <Col as="h5" className="text-bold mt-3 mb-0 d-block d-sm-none">
          {convertToString(location.pathname)}
        </Col>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-sm"
          className="ms-auto"
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          aria-labelledby="offcanvasNavbarLabel-expand-sm"
          placement="end"
        >
          <Offcanvas.Header closeButton className="align-items-start">
            <Offcanvas.Title
              id="offcanvasNavbarLabel-expand-sm"
              className="text-center mx-auto"
            >
              <Image
                src="https://i.ibb.co/T4nM1Qd/F55-E6-CCE-C6-AF-4599-8137-B76-BB1-FFCDB5.png"
                roundedCircle
                width={74}
                style={{ backgroundColor: "#E6D7FF" }}
                className="mt-3"
              />
              <h5 className="my-3 text-bold">Let's connect:</h5>
              {socialMediaData.map((social, index) => (
                <Link
                  to={social.to}
                  style={{
                    fontSize: "18px",
                    display: "inline-block",
                    background: "#d2afff",
                    lineHeight: 1,
                    padding: "8px 0",
                    borderRadius: "50%",
                    textAlign: "center",
                    width: 36,
                    height: 36,
                    transition: "0.3s"
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`socialId-${index}`}
                  className="mx-1"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    style={{ color: "#FFFFFF" }}
                  />
                </Link>
              ))}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ borderBottom: "1px solid #dee2e6" }}>
            <Nav className="justify-content-center flex-grow-1 my-4">
              {routes.map((route, index) => (
                <Nav.Link
                  key={index}
                  as={Link}
                  to={route.path}
                  active={location.pathname === route.path}
                  style={navStyle}
                  className="py-2"
                >
                  <Col as="div" style={navBeforeStyle(route.path)} />
                  {route.name}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </Container>
  );
}

export default Menu;
