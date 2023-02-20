import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
        
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; Thiya Ruff</Col>
                </Row>
            </Container>
        </footer>
    </div>
  )
}

export default Footer