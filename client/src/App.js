// Imports
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import HomePage from "./components/pages/HomePage/HomePage";
import Footer from './components/Footer/Footer';

// Styling
import './App.css'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;