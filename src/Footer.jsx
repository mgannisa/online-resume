import { Link } from "react-router-dom";
import { Container, Stack } from "react-bootstrap";
import { socialMediaData } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div
      className="d-none d-sm-block"
      style={{ borderTop: "1px solid var(--grey-light-color)" }}
    >
      <Container fluid className="py-3" style={{ maxWidth: 960 }}>
        <Stack direction="horizontal" gap={2}>
          <div className="ms-auto"></div>
          <small className="text-secondary me-3">Let's connect:</small>
          {socialMediaData.map((social, index) => (
            <Link
              to={social.to}
              style={{
                fontSize: "18px",
                background: "var(--lilac-color)",
                lineHeight: 1,
                padding: "8px 0",
                borderRadius: "50%",
                textAlign: "center",
                width: 36,
                height: 36,
                transition: "0.3s",
              }}
              target="_blank"
              rel="noopener noreferrer"
              key={`socialId-${index}`}
            >
              <FontAwesomeIcon
                icon={social.icon}
                style={{ color: "var(--white-color)" }}
              />
            </Link>
          ))}
        </Stack>
      </Container>
    </div>
  );
}

export default Footer;
