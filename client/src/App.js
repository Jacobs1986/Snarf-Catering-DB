import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Footer from "./components/Footer";

// Pages
import Home from "./components/pages/Home/Home";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Footer />
    </Router>
  );
}

export default App;
