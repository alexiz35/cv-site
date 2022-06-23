import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HeadBar.scss";


export default function HeadBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Oleksandr I</Navbar.Brand>
                    <div className="justify-content-end">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav className="me-auto">
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#skills">Skills</Nav.Link>
                                <NavDropdown title="GitHub" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#experience">Experience</Nav.Link>
                                <Nav.Link href="#memes">Education</Nav.Link>
                                <Nav.Link href="#memes">Courses</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
            <div className="headContainer">
                <div className="headAva">
                    <img src="/img/ava12.jpg" height={"200px"} alt={"ava"} style={{borderRadius: "50px"}}/>

                </div>
                <div className="headName">
                    <h1><b>OLEKSANDR IZIUMOV</b></h1>
                    <h2>JUNIOR FRONTEND DEVELOPER</h2>
                </div>
                <div className="headContact">
                    <table align={"center"}>
                        <tbody>
                        <tr>
                            <td><b>ADRESS</b></td>
                            <td>:</td>
                            <td>Ukraine</td>
                        </tr>
                        <tr>
                            <td><b>EMAIL</b></td>
                            <td>:</td>
                            <td>aleksiz1977@gmail.com</td>
                        </tr>
                        <tr>
                            <td><b>PHONE</b></td>
                            <td>:</td>
                            <td>+380974616818</td>
                        </tr>
                        <tr>
                            <td><b>SOCIAL</b></td>
                            <td>:</td>
                            <td><a href="https://www.linkedin.com/in/aleksiz1977/">LinkedIn</a></td>
                        </tr>
                        <tr>
                            <td><b>SOCIAL</b></td>
                            <td>:</td>
                            <td><a>Facebook</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}