import React, { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { Button } from "react-bootstrap";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  //signOut
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="warning"
        variant="warning"
        className="p-3 mb-3"
      >
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>Dragon News</Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <div href="">
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <Button
                      variant="light"
                      onClick={handleLogOut}
                      className="ms-2 me-2"
                    >
                      {" "}
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link
                      className="me-2 fw-bold text-decoration-none"
                      to={"/login"}
                    >
                      Login
                    </Link>
                    <Link
                      className="me-2 fw-bold text-decoration-none"
                      to={"/register"}
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
              <Link to={'/profile'}>
                {user?.photoURL ? (
                  <Image
                    src={user?.photoURL}
                    style={{ height: "30px" }}
                    roundedCircle
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </Link>
            </Nav>
            <div className="d-lg-none ">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
