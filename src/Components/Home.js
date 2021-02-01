import React, { Component } from 'react'

import "./assets/css/bootstrap.min.css"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"

export default class Home extends Component {
    render() {
        return (
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Card style={{ width: '50rem' }}>
                        <Card.Header>Product Insert</Card.Header>
                        <Card.Body>
                                <Card.Text>
                                    <Form>
                                        <Form.Group as={Row} controlId="formPlaintextEmail">
                                            <Form.Label column sm="2">
                                            Title
                                            </Form.Label>
                                            <Col sm="6">
                                                <Form.Control type="text" onChange={(event) => {this.setState({name:event.target.value})}} placeholder="Product Name" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="2">
                                            Description
                                            </Form.Label>
                                            <Col sm="6">
                                                <Form.Control type="text" onChange={(event) => {this.setState({password:event.target.value})}} placeholder="Password" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="2">
                                            Price
                                            </Form.Label>
                                            <Col sm="6">
                                                <Form.Control type="number" onChange={(event) => {this.setState({password:event.target.value})}} placeholder="Password" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="2">
                                            Image
                                            </Form.Label>
                                            <Col sm="6">
                                                <Form.Control type="file" onChange={(event) => {this.setState({password:event.target.value})}} placeholder="Password" />
                                            </Col>
                                        </Form.Group>

                                        <Button onClick={()=>{this.login()}} variant="success">Insert</Button>
                                    </Form>
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Welcome To The React</Card.Footer>
                    </Card>
                </Row>
            </Container>
        )
    }
}
