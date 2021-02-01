import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Index from "./Index";
import Home from "./Home";
import AllProducts from "./AllProducts";

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={withRouter(Index)} />
                    <Route path="/home" component={withRouter(Home)} />
                    <Route path="/all-products" component={withRouter(AllProducts)} />
                </Switch>
            </Router>
        )
    }
}
