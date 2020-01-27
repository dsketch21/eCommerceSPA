import React from 'react';
import logo from '../../assets/images/logo.svg';
import ShoppingCart from '../checkout/shoppingCart';
import { connect } from 'react-redux';

import './header.scss';

class Header extends React.Component {
    getProductCount() {
        return this.props.productsInCart.reduce((total, p) => total + p.quantity, 0);
    }

    render() {
        return (
            <>
                <ShoppingCart />
                <header className="grid-x">
                    <div className="cell small-6 medium-6 large-6">
                        <img src={logo} />
                    </div>
                    <div className="cell small-6 medium-6 large-6">
                        <i
                            className="fa fa-shopping-cart fa-lg"
                            data-open="shopping-cart"
                        >
                            <span>{this.getProductCount()}</span>
                        </i>
                    </div>
                </header>
            </>
        );
    }
}

const mapStateToProps = state => ({
    productsInCart: state.shoppingCart.productsInCart
});

export default connect(mapStateToProps, {})(Header);
