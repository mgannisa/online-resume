import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation
} from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Menu from "./Menu";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const routes = [
  {
    path: "/",
    name: "About",
    element: <About />
  },
  {
    path: "/resume",
    name: "Resume",
    element: <Resume />
  },
  {
    path: "/skills",
    name: "Skills",
    element: <Skills />
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    element: <Testimonials />
  },
  {
    path: "/contact",
    name: "Contact",
    element: <Contact />
  }
];
const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <motion.div
      key={pathname}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Outlet />
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <Header routes={routes} />
      <Menu routes={routes} />
      <Container className="mb-5" style={{ maxWidth: 960 }}>
        <Routes>
          <Route element={<AnimationLayout />}>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
