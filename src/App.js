import React from 'react';

import { Header } from './components';
import { Cart, Home } from './pages';
import { Route } from 'react-router-dom';

import './scss/app.scss';

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" component={Home} exact />
                <Route path="/cart" component={Cart} exact />
            </div>
        </div>
    );
};

export default App;
