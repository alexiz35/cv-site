import React, {useContext} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HeadBar.scss";
import {NameMenu} from './App';


export default function HeadBar() {

    const [menuItem,setMenuItem] = useContext(NameMenu);

    const handleSelectMenu = (eventKey)=> {

    }


    return (
        <>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Oleksandr I</Navbar.Brand>
                    <div className="justify-content-end">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav className="me-auto" activeKey={menuItem} onSelect = {handleSelectMenu}>
                                <Nav.Link eventKey = "about" href="#about" >About</Nav.Link>
                                <Nav.Link eventKey = "skills" href="#skills">Skills</Nav.Link>
                                <NavDropdown  title="GitHub" id="collasible-nav-dropdown" >
                                    <NavDropdown.Item  href="https://github.com/alexiz35/cv-site" >CV
                                        project</NavDropdown.Item>
                                    <NavDropdown.Item href="https://github.com/alexiz35/mernProject">MERN
                                        project</NavDropdown.Item>
                                    <NavDropdown.Item href="https://github.com/alexiz35/test_task">TestTask
                                        project</NavDropdown.Item>
                                    {/*<NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                                </NavDropdown>
                                <Nav.Link eventKey = "experience" href="#experience">Experience</Nav.Link>
                                <Nav.Link eventKey = "education" href="#education">Education</Nav.Link>
                                <Nav.Link eventKey = "courses" href="#courses">Courses</Nav.Link>
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
                            <td><a href= "mailto:oleksandr.iziumov@gmail.com" >oleksandr.iziumov@gmail.com</a></td>
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
                            <td><a href="https://www.facebook.com/profile.php?id=100017327100908">Facebook</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}