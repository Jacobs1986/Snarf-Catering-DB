import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Styling
import './App.css'

// Components
import Footer from './components/Footer/Footer';

// Pages
import HomePage from './components/Pages/HomePage/HomePage';
import OrderPage from './components/Pages/OrderPage/OrderPage';

function App() {
    return (
        <div>
            <Router>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/orders' component={OrderPage} />
            </Router>
            <Footer />
        </div>
    );
}

export default App;