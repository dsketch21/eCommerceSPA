import React from 'react';
import HelpBox from '../common/helpBox';
import ProductDetails from './productDetails';
import ProductDescription from './productDescription';
import ProductGallery from './productGallery';
import { connect } from 'react-redux';
import { loadProduct } from '../../actions/productActions';

class ProductView extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.loadProduct();
    }

    render() {
        return (
            <>
                {this.props.product && (
                    <div className="grid-x">
                        <div className="cell medium-3 large-3">
                            <ProductDescription />
                        </div>
                        <div className="cell medium-6 large-6">
                            <ProductGallery />
                        </div>
                        <div className="cell medium-3 large-3">
                            <ProductDetails />
                        </div>
                    </div>
                )}
                <HelpBox />
            </>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product.product
});

export default connect(mapStateToProps, { loadProduct })(ProductView);
