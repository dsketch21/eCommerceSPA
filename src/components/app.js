import Footer from './common/footer';
import Header from './common/header';
import React from 'react';
import ProductView from './product/productView';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Router>
                    <Switch>
                        <Route path="/">
                            <ProductView />
                        </Route>
                    </Switch>
                </Router>
                <Footer />
            </>
        );
    }
}

export default App;
