import logo from '/logo.avif'
import { styled } from "styled-components"
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonComponent from '../Button/ButtonComponent';
import { useEffect, useState, useCallback } from 'react'
import ModalComponent from '../ModalLogin/ModalComponent'
import RegisterPage from '../../pages/RegisterPage';


export default function Header() {
    const [modal, setModal] = useState(false)
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <img src={logo} alt="Result" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/recipes'>Go to Recipes</Nav.Link>
                            <Nav.Link as={Link} to='/login'>LOGIN</Nav.Link>
                            <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                            <Nav.Link onClick={() => setModal(true)}>Log In</Nav.Link>

                            <ModalComponent open={modal}>
                                <RegisterPage />
                                <ButtonComponent onClick={() => setModal(false)}>Close modal</ButtonComponent>
                            </ModalComponent>


                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">
                                    Register
                                </NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action/3.3">Modal</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>


    )

}