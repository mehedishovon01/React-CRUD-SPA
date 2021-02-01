import React, { Component } from 'react'

import "./assets/css/bootstrap.min.css"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import { Link } from 'react-router-dom';
import { createBrowserHistory } from "history";

export default class Index extends Component {
    constructor(){
        super();
        this.state={
            email: null,
            password: null,
            login: false,
            store: null,
            title:null,
            slug:null,
            description:null,
            price:null,
            image:null
        }
    }

    componentDidMount(){
        this.storeCollector()
    }
    storeCollector(){
        let store = JSON.parse(localStorage.getItem('login'));

        if (store && store.login){
            this.setState({login:true, store:store})
        }
    }

    login(){
        fetch('http://127.0.0.1:8000/api/login', {
            method:"POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(this.state)
        }).then((response)=>{
            response.json().then((result)=>{
                console.warn('result', result);
                localStorage.setItem('login', JSON.stringify({
                    login: true,
                    store: result.access_token
                }))
                this.storeCollector()
            })
        })
    }

    productInsert(props){
        let token="Bearer "+this.state.store.store
        console.warn('AUTH_TOKEN', token)
        fetch('http://127.0.0.1:8000/api/create', {
            method:"POST",
            headers: {
                "Authorization":token,
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(this.state)
        }).then((response)=>{
            response.json().then((product)=>{
                this.setState({response:product.message})
                this.props.history.push("/all-products",  token );
                console.warn('products', product);
            })
        })
    }

    render() {
        return (
            <Container className="mt-5">
            {   !this.state.login ?
                <Row className="justify-content-md-center">
                    <Card style={{ width: '50rem' }}>
                        <Card.Header>Auth User Login</Card.Header>
                        <Card.Body>
                            <Card.Title>Login Form</Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group as={Row} controlId="formPlaintextEmail">
                                            <Form.Label column sm="2">
                                            Email
                                            </Form.Label>
                                            <Col sm="6">
                                                <Form.Control type="email" onChange={(event) => {this.setState({email:event.target.value})}} placeholder="email@example.com" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="2">
                                            Password
                                            </Form.Label>
                                            <Col sm="6">
                                                <Form.Control type="password" onChange={(event) => {this.setState({password:event.target.value})}} placeholder="Password" />
                                            </Col>
                                        </Form.Group>
                                        <Button onClick={()=>{this.login()}} variant="success">Login</Button>
                                    </Form>
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Welcome To The React</Card.Footer>
                    </Card>
                </Row>
                :
                <Row className="justify-content-md-center">
                    <Card style={{ width: '50rem' }}>
                        <Card.Header>Product Insert<br/>
                        {
                            this.state.response
                        }
                        </Card.Header>
                        <Card.Body>
                                <Card.Text>
                                    <Form>
                                        <Form.Group as={Row} controlId="formPlaintextEmail">
                                            <Form.Label column sm="3">
                                            Title
                                            </Form.Label>
                                            <Col sm="6">
                                                <Form.Control type="text" onChange={(event) => {this.setState({title:event.target.value})}} placeholder="Product Titile" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextEmail">
                                            <Form.Label column sm="3">
                                            Slug
                                            </Form.Label>
                                            <Col sm="6">
                                                <Form.Control type="text" onChange={(event) => {this.setState({slug:event.target.value})}} placeholder="Slug" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="3">
                                            Description
                                            </Form.Label>
                                            <Col sm="6">
                                                <Form.Control type="text" onChange={(event) => {this.setState({description:event.target.value})}} placeholder="Description" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="3">
                                            Price
                                            </Form.Label>
                                            <Col sm="6">
                                                <Form.Control type="number" onChange={(event) => {this.setState({price:event.target.value})}} placeholder="Price" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="3">
                                            Image
                                            </Form.Label>
                                            <Col sm="6">
                                                <Form.Control type="file" onChange={(event) => {this.setState({image:event.target.value})}} />
                                            </Col>
                                        </Form.Group>

                                        <Button onClick={()=>{this.productInsert()}} variant="success">Insert</Button>
                                        <Link to="/all-products">
                                            <Button variant="info">
                                                All Products
                                            </Button>
                                        </Link>
                                    </Form>
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Welcome To The React</Card.Footer>
                    </Card>
                </Row>
            }
            </Container>
        )
    }
}
