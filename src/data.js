import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faTelegram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faMobileScreen
} from "@fortawesome/free-solid-svg-icons";

const socialMediaData = [
  { to: "https://twitter.com/mgannisa", icon: faTwitter },
  { to: "https://www.linkedin.com/in/mgannisa", icon: faLinkedin },
  { to: "https://instagram.com/mgannisa", icon: faInstagram },
  { to: "https://t.me/mgannisa", icon: faTelegram },
  {
    to: "https://api.whatsapp.com/send?phone=6285718351194",
    icon: faWhatsapp
  }
];

const infos = [
  { title: "Birthday", value: "24 May 1994" },
  { title: "Phone", value: "+62 857 1835 1194" },
  { title: "City", value: "Bogor, ID" },
  { title: "Age", value: "29" },
  { title: "Degree", value: "Bachelor of CS" },
  { title: "Email", value: "annisamga@gmail.com" }
];

const contactInfo = [
  {
    label: "Location",
    val: "Bogor, West Java, ID 16310",
    icon: faLocationDot
  },
  { label: "Email", val: "annisamga@gmail.com", icon: faEnvelope },
  { label: "Call", val: "+62 857 1835 1194", icon: faMobileScreen }
];

const skillsData = [
  { label: "HTML", percentage: 100 },
  { label: "React.js", percentage: 80 },
  { label: "Vue.js", percentage: 92 },
  { label: "CSS", percentage: 100 },
  { label: "JavaScript", percentage: 90 },
  { label: "ES6", percentage: 75 }
];

const swotData = [
  {
    eventKey: 0,
    label: "Strengths",
    description: (
      <ul className="mb-0 px-3">
        <li>
          <span className="text-bold">Exceptional Critical Thinking:</span> My
          ability to think critically and analyze complex situations is a
          significant strength. It enables me to solve problems efficiently and
          make well-informed decisions.
        </li>
        <li>
          <span className="text-bold">Detail-Oriented:</span> I have a natural
          inclination towards paying close attention to details. This quality
          reflects in my work, ensuring a high level of accuracy and precision.
        </li>
        <li>
          <span className="text-bold">Fast Learner:</span> I possess the ability
          to quickly grasp new concepts and technologies, which allows me to
          adapt to rapidly evolving work environments and stay updated in my
          field.
        </li>
      </ul>
    )
  },
  {
    eventKey: 1,
    label: "Weaknesses",
    description: (
      <p className="mb-0">
        <span className="text-bold">Challenges in Listening:</span> One of my
        weaknesses is that I sometimes struggle with being a good listener,
        which can result in misunderstandings or missed information.
      </p>
    )
  },
  {
    eventKey: 2,
    label: "Opportunities",
    description: (
      <p className="mb-0">
        <span className="text-bold">Effective Note-Taking:</span> To address my
        weakness in listening, I've turned it into an opportunity by adopting a
        proactive approach of taking detailed notes during meetings and
        projects. This practice not only compensates for my listening challenges
        but also enhances my ability to retain and recall important information.
      </p>
    )
  },
  {
    eventKey: 3,
    label: "Threats",
    description: (
      <p className="mb-0">
        The primary threat stems from the risk of miscommunication or
        overlooking crucial details due to my listening challenges. However, my
        systematic note-taking approach helps mitigate this threat, ensuring
        that I have a comprehensive record of key points and discussions.
      </p>
    )
  }
];

const testimonials = [
  {
    name: "Andre",
    title: "Software Engineer Back End",
    testimonial: `Mega is an outstanding Front-End expert, known for her remarkable attention to detail and dedication to crafting exceptional user experiences. She consistently translates design concepts into visually stunning, functional websites. I highly recommend Mega for front-end development projects.`
  },
  {
    name: "Nada",
    title: "Product Manager",
    testimonial: `Collaborating with Mega has transformed our web projects. Her mastery of HTML, CSS, and JavaScript shines in her responsive websites. Mega's commitment to clean code and tackling intricate design issues is invaluable to any team.`
  },
  {
    name: "Faisal",
    title: "Software Engineer Front End",
    testimonial: `Collaborating with Mega on various projects has been a pleasure. Her front-end skills are exceptional, spanning various web technologies, and she possesses a keen eye for design aesthetics. Mega consistently enhances our project quality.`
  },
  {
    name: "Annas",
    title: "Engineering Manager",
    testimonial: `Mega, an exceptional Front-End Developer, infuses creativity into her work. She meets deadlines and surpasses client expectations, reflecting her professionalism. Mega's contributions elevate our team's capacity to deliver outstanding web solutions.`
  }
];

const educationData = [
  {
    title: "BACHELOR OF COMPUTER SCIENCE",
    year: "2011 - 2015",
    subtitle: "Universitas Indonesia, Faculty of Computer Science, Depok, ID",
    description: (
      <>
        <p>
          During my Bachelor's degree in Computer Science at Universitas
          Indonesia, I gained a strong foundation in computer science
          principles, programming languages, and software development
          methodologies. This program equipped me with the knowledge and skills
          needed to excel in the field of software engineering and front-end
          development. I participated in various projects and coursework,
          allowing me to apply theoretical concepts to real-world scenarios and
          develop problem-solving abilities.
        </p>
        <p>
          Additionally, my education fostered a collaborative mindset and
          effective communication skills, which are crucial for working in
          multidisciplinary teams and delivering successful projects. Overall,
          my academic journey laid the groundwork for my career as a Software
          Engineer and User Interface & Front-End Developer.
        </p>
      </>
    )
  },
  {
    title: "HIGH SCHOOL ACCELERATION PROGRAM",
    year: "2009 - 2011",
    subtitle: "SMA Negeri 6 Bogor, West Java, ID",
    description: (
      <p className="mb-0 mt-4">
        During my educational journey, I had the privilege of attending an
        acceleration class from 2009 to 2011, which provided me with an enriched
        learning experience. Additionally, I spent two impactful years at SMA
        Negeri 6 Bogor, where I further honed my academic skills and nurtured a
        passion for knowledge. These educational experiences have been
        instrumental in shaping my academic foundation and fostering my
        commitment to personal growth.
      </p>
    )
  }
];
const experienceData = [
  {
    title: "SOFTWARE ENGINEER FRONT END",
    year: "2019 - 2022",
    subtitle: "Bukalapak, South Jakarta, ID",
    description: (
      <ul className="px-3">
        <li>
          As a Front-End Software Engineer at Bukalapak, I joined the Squad
          Revenue, playing a pivotal role in maintaining and advancing the
          Seller Center and Promotion Page. I leveraged cutting-edge technology,
          Vue.js, to ensure seamless user experiences.
        </li>
        <li>
          I implemented a test-driven approach, elevating code quality and
          reliability to the highest standards, guaranteeing the seamless
          operation of Bukalapak's platforms.
        </li>
        <li>
          I actively supported my peers by conducting thorough code reviews,
          fostering a culture of teamwork and continuous improvement.
        </li>
        <li>
          I authored meticulous technical documentation for Promotion Page
          features, streamlining development processes and facilitating
          effective cross-team communication.
        </li>
        <li>
          Within the Bukalapak ecosystem, I expertly managed the Promotion Page
          microservice, ensuring uninterrupted performance and diligently
          monitoring for any potential issues.
        </li>
        <li>
          In an exciting venture with Squad KingKong, the fresh meats and egg
          application, I embarked on the development of a vibrant Blog and SEO
          Page. As a passionate volunteer, I spearheaded the creation of a
          cutting-edge microservice front-end for the KingKong Blog, harnessing
          Firebase, Nuxt.js, and Vue.js technologies to achieve outstanding
          results.
        </li>
      </ul>
    )
  },
  {
    title: "SOFTWARE ENGINEER USER INTERFACE",
    year: "2017 - 2019",
    subtitle: "Bukalapak, South Jakarta, ID",
    description: (
      <ul className="px-3">
        <li>
          I collaborated with the Product Design team, crafting atomic
          components for Bukalapak's web pages.
        </li>
        <li>
          Within Squad Revenue, I maintained and developed Bukalapak's Seller
          Center and Promotion Page.
        </li>
        <li>
          My strong communication skills fostered seamless collaboration in
          meetings and projects.
        </li>
      </ul>
    )
  },
  {
    title: "FRONT END DEVELOPER",
    year: "2016 - 2017",
    subtitle: "Travorama, South Jakarta, ID",
    description: (
      <p>
        At Travorama, I played a pivotal role in shaping the digital travel
        experience, working on hotel and flight ticketing.
      </p>
    )
  },
  {
    title: "CSS ENGINEER",
    year: "2015 - 2016",
    subtitle: "Reebonz, Central Jakarta, ID",
    description: (
      <p className="mb-0 mt-4">
        At Reebonz, a luxury fashion e-commerce platform, I enhanced the user
        interface using CSS.
      </p>
    )
  }
];
export {
  socialMediaData,
  infos,
  contactInfo,
  skillsData,
  swotData,
  testimonials,
  educationData,
  experienceData
};
