import React from 'react';
import AccordionSlider from '../common/foundation/accordionSlider';
import AddToCart from './addToCart';
import { connect } from 'react-redux';

import './productDetails.scss';

class ProductDetails extends React.Component {
    componentDidMount() {
        $(document).foundation();
    }

    render() {
        const productDetailSliders = this.props.product.productDetails.map(
            detail => (
                <AccordionSlider
                    description={detail.description}
                    key={detail.label}
                    label={detail.label}
                />
            )
        );
        return (
            <>
                <div className="product-details">
                    {productDetailSliders && (
                        <ul
                            className="accordion"
                            data-accordion
                            data-allow-all-closed="true"
                        >
                            {productDetailSliders}
                        </ul>
                    )}
                    <AddToCart />
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product.product
});

export default connect(mapStateToProps, {})(ProductDetails);
