import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Footer from "./components/Footer";

// Pages

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <Footer />
    </Router>
  );
}

export default App;
