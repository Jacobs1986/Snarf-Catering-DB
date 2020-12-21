import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import Home from "./pages/Home/home.page";
// import Orders from "./pages/Orders/orders.page";

// Styling
import "./App.css"

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/orders" component={Orders} /> */}
            </Router>
        );
    };
}

export default App;