import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
function Footer() {
    return (
        <footer>
            <Container>
                <Row className='bg-dark'>
                    <Col className='text-center py-3  bg-dark text-light mt-3'>
                        Copyright &copy; {new Date().getFullYear()}
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;