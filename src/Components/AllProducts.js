import React, { Component } from 'react'
import "./assets/css/bootstrap.min.css"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/Table"

export default class AllProducts extends Component {
    constructor(props){
        super(props);
        this.state={
            data:false,
            store:null  
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/all-products', {
            method:"GET",
            headers: {
                // "Authorization":item,
                "Content-type": "application/json",
                "Accept": "application/json"
            },
        }).then((response)=>{
            response.json().then((product)=>{
                this.setState({response:product})
                console.warn('products', product);
            })
        })
    }
    render() {
        const data = this.state.response;
        console.warn("PROD", data);
        return (
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Card style={{ width: '50rem' }}>
                        <Card.Header>All Products</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>No</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { data ?
                                        
                                        <tr>
                                        <td>1</td>
                                        <td>{data[0].title }</td>
                                        <td>{ data[0].description }</td>
                                        <td>{ data[0].price }</td>
                                        <td>{ data[0].image }</td>
                                        <td>Button</td>
                                        </tr>
                                        :
                                        <h1>No Data Available</h1>
                                        }
                                    </tbody>
                                </Table>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Welcome To The React</Card.Footer>
                    </Card>
                </Row>
            </Container>
        )
    }
}
