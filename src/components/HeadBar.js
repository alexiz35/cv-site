import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import "./HeadBar.scss"

export default function HeadBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="xl" fixed="top">
                <Container>
                    <Navbar.Text>
                        Oleksandr
                    </Navbar.Text>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse  id="basic-navbar-nav">

                    </Navbar.Collapse>
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