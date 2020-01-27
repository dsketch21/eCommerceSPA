import React from 'react';
import { addProductToCart } from '../../actions/productActions';
import { connect } from 'react-redux';

import './addToCart.scss';

class AddToCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSize: this.props.product.sizes[0],
            currentOption: this.props.product.sizes[0].options[0]
        };
    }

    setCurrentSize(s) {
        this.setState({
            currentSize: s,
            currentOption: s.options[0]
        });
    }

    setCurrentOption(o) {
        this.setState({
            currentOption: o
        });
    }

    render() {
        const colorOptions = this.state.currentSize.options.map(o => {
            const styles = {
                backgroundColor: o.hex
            };
            return (
                <div
                    className={
                        'option-wrapper' +
                        (o.hex == this.state.currentOption.hex ? ' active' : '')
                    }
                    key={o.id}
                    onClick={() => this.setCurrentOption(o)}
                >
                    <span className="option-icon" style={styles}></span>
                    {o.material}
                </div>
            );
        });
        const abbreviationIcons = this.props.product.sizes.map(s => (
            <span
                className={s.id == this.state.currentSize.id ? 'active' : ''}
                key={s.id}
                onClick={() => this.setCurrentSize(s)}
            >
                {s.abbreviation}
            </span>
        ));
        return (
            <>
                <div className="add-to-cart">
                    {colorOptions && <div className="options">{colorOptions}</div>}
                    {abbreviationIcons && (
                        <div className="abbrev-icons">{abbreviationIcons}</div>
                    )}
                    {this.state.currentOption.quantity > 0 && (
                        <button
                            onClick={() =>
                                this.props.addProductToCart({
                                    optionId: this.state.currentOption.id,
                                    productId: this.props.product.id,
                                    sizeId: this.state.currentSize.id
                                })
                            }
                        >
                            Add to Bag <i className="fa fa-arrow-right fa-lg"></i>
                        </button>
                    )}
                    {this.state.currentOption.quantity == 0 && (
                        <h3>Out of Stock.</h3>
                    )}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product.product
});
export default connect(mapStateToProps, { addProductToCart })(AddToCart);
