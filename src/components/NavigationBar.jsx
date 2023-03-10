import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="sm">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="center">
          <Nav
            className="me-auto my-2 my-lg-0 center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" className="center">
              Home
            </Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { Nav, Navbar, NavLink } from "react-bootstrap";

// function NavigationBar() {
//   return (
//     <>
//       <h1>Brand name/Logo</h1>
//       <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
//         <Navbar.Toggle
//           aria-controls="navbarScroll"
//           data-bs-target="#navbarScroll"
//         />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav>
//             <NavLink eventKey="1" as={Link} to="/">
//               Home
//             </NavLink>
//             <NavLink eventKey="2" as={Link} to="/about">
//               About
//             </NavLink>
//             <NavLink eventKey="3" as={Link} to="/contact">
//               Contact
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// }
// export default NavigationBar;
