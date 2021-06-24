import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import classnames from "classnames";
import { FaLinkedinIn,FaInstagram,FaBehance,FaGithub } from "react-icons/fa";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavDropdown,
  Container,
  Collapse,
  Button
} from 'react-bootstrap';
function SearchNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} collapseOnSelect expand="lg">
      <Container>
        <div className="navbar-translate">
          <Navbar.Brand
            data-placement="bottom"
            href="/home"
            target="_blank"
            title="Parth Pradhan"
          >
          Recipie React
          </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
   
   
  );
}

export default SearchNavbar;
