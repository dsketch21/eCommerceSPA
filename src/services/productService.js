import mockProduct from '../../mocks/product';
import { isEqual } from 'lodash';
const productService = {};
let productsInCart = [];

productService.addProductToCart = async ({ optionId, productId, sizeId }) =>
    new Promise((resolve, reject) => {
        const sizeObj = mockProduct.sizes.filter(s => s.id == sizeId).pop();
        const sizeOptionObj = sizeObj.options.filter(o => o.id == optionId).pop();
        const product = {
            size: sizeObj.name,
            option: {
                color: sizeOptionObj.color,
                material: sizeOptionObj.material
            }
        };
        const isProductInCart = productsInCart.filter(p =>
            isEqual(p.product, product)
        );
        if (isProductInCart.length) {
            productsInCart = productsInCart.map(p => {
                if (isEqual(p.product, product)) {
                    p.quantity++;
                }
                return p;
            });
        } else {
            productsInCart.push({
                product,
                quantity: 1
            });
        }
        resolve([...productsInCart]);
    });

productService.getProductOTD = async () =>
    new Promise(resolve => resolve(mockProduct));

export default productService;
