import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HeadBar.scss"

export default function HeadBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Oleksandr I</Navbar.Brand>
                    <div className="justify-content-end">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">About</Nav.Link>
                                <Nav.Link href="#pricing">Skills</Nav.Link>
                                <NavDropdown title="GitHub" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#deets">Experience</Nav.Link>
                                <Nav.Link href="#memes">Education</Nav.Link>
                                <Nav.Link href="#memes">Courses</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
            <div className="headContainer">
                <div className="headAva">

                </div>
                <div className="headName">
                    <h1><b>OLEKSANDR IZIUMOV</b></h1>
                    <h2>JUNIOR FRONTEND DEVELOPER</h2>
                </div>
                <div className="headContact">

                </div>
            </div>

        </>
    )
}