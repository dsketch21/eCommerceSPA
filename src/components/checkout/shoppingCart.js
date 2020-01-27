import React from 'react';
import { connect } from 'react-redux';

import './shoppingCart.scss';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }

    buildTableData() {
        const productRows = this.props.productsInCart.map(p => (
            <tr
                key={
                    p.product.size +
                    p.product.option.color +
                    p.product.option.material
                }
            >
                <td>{this.props.product.name}</td>
                <td>
                    {p.product.size} - {p.product.option.color} -{' '}
                    {p.product.option.material}
                </td>
                <td>{p.quantity}</td>
                <td>${this.props.product.price}</td>
            </tr>
        ));
        return productRows;
    }

    buildTotalRow() {
        const total = this.props.productsInCart.reduce((total, product) => {
            return total + product.quantity * this.props.product.price;
        }, 0);
        return (
            <tr>
                <td></td>
                <td></td>
                <td>Total: </td>
                <td>${ total }</td>
            </tr>
        );
    }

    closeModal() {
        $('#shopping-cart').foundation('close');
    }

    render() {
        return (
            <>
                <div className="reveal" id="shopping-cart" data-reveal>
                    <h1>Shopping Cart</h1>
                    <button
                        className="close-button"
                        onClick={this.closeModal}
                        type="button"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {this.props.productsInCart.length > 0 && (
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Details</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.buildTableData()}
                                    {this.buildTotalRow()}
                                </tbody>
                            </table>
                            <div className="button-wrapper">
                                <button type="button" className="button">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    )}
                    {!this.props.productsInCart.length && (
                        <p>You have no items in your cart.</p>
                    )}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product.product,
    productsInCart: state.shoppingCart.productsInCart
});

export default connect(mapStateToProps, {})(ShoppingCart);
