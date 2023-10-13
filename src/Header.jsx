import { Image, Container } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

function Header({ routes }) {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/gradient-grainy-texture_23-2148987745.jpg?w=740&t=st=1696662338~exp=1696662938~hmac=441adc1438f4af0f886c42812dfa0078132fab878ec49d70f15d41d72b14d562")',
        backgroundSize: "cover",
      }}
    >
      <Container className="py-5" style={{ maxWidth: 960 }}>
        <Image
          src="https://i.ibb.co/1zB4NF6/E2-A667-C5-A7-E5-4962-9882-26-CE779-BD58-B.png"
          roundedCircle
          width={84}
          style={{ backgroundColor: "var(--white-color)" }}
          className="mb-3"
        />
        <h2 className="mb-2">
          <strong>Mega Annisa</strong>
        </h2>
        <h1 className="mb-3">
          <strong>a person that likes to tweak a web.</strong>
        </h1>
        <h6 className="mb-3">
          <TypeAnimation
            sequence={[
              "I'm Front End Developer",
              1000,
              "I'm Software Engineer User Interface",
              1000,
              "I'm CSS Specialist",
              1000,
            ]}
            wrapper="em"
            speed={10}
            style={{
              display: "inline-block",
              background: "var(--white-color)",
            }}
            repeat={Infinity}
          />
        </h6>
      </Container>
    </div>
  );
}

export default Header;
