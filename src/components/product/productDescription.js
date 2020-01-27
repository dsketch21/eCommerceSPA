import React from 'react';
import { connect } from 'react-redux';

import './productDescription.scss';

class ProductDescription extends React.Component {
    render() {
        const bullets = this.props.product.bullets.map(f => (
            <li key={f.toString()}>{f}</li>
        ));
        return (
            <>
                <div className="product-description">
                    <h1>{this.props.product.name}</h1>
                    <p>{this.props.product.description}</p>
                    <ul>{bullets}</ul>
                    <h2>${this.props.product.price}</h2>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product.product
});
export default connect(mapStateToProps, {})(ProductDescription);
