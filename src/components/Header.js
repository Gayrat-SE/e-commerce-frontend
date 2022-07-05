import React from 'react';
import {Container, Nav, Button, Navbar, Form, FormControl} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
function Header(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="#">JustShop</Navbar.Brand>
                </LinkContainer> 
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 justify-content-end"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                <Nav.Link href="#action1"><i className='fas fa-shopping-cart'></i>Card</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="#action2"><i className='fas fa-user'></i> Login</Nav.Link>
                <Form className="d-flex">
                    <FormControl
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
    )
}

export default Header;