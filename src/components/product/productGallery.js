import React from 'react';
import { connect } from 'react-redux';

import './productGallery.scss';

class ProductGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: this.props.product.images[0]
        };
    }

    setCurrentImage(img) {
        this.setState({ currentImage: img });
    }

    render() {
        const thumbnails =
            this.props.product.images.length > 1
                ? this.props.product.images.map(i => (
                      <li key={i} onMouseEnter={() => this.setCurrentImage(i)}>
                          <img src={i} />
                      </li>
                  ))
                : '';
        return (
            <>
                <div className="product-gallery">
                    <img className="mainImage" src={this.state.currentImage} />
                    {thumbnails && (
                        <ul className="product-thumbnails">{thumbnails}</ul>
                    )}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product.product
});

export default connect(mapStateToProps, {})(ProductGallery);
