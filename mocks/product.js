import image1 from '../src/assets/images/jumpsuit-1.jpg';
import image2 from '../src/assets/images/jumpsuit-2.jpg';
import image3 from '../src/assets/images/jumpsuit-3.jpg';
import image4 from '../src/assets/images/jumpsuit-4.jpg';
import image5 from '../src/assets/images/jumpsuit-5.jpg';

const mockProduct = {
    id: 890,
    sizes: [
        {
            id: 123,
            name: 'Small',
            abbreviation: 'S',
            options: [
                {
                    id: 1,
                    color: 'Black',
                    hex: '#000',
                    material: 'Silk',
                    quantity: 57
                }
            ]
        },
        {
            id: 234,
            name: 'Medium',
            abbreviation: 'M',
            options: [
                {
                    id: 2,
                    color: 'Black',
                    hex: '#000',
                    material: 'Silk',
                    quantity: 43
                }
            ]
        },
        {
            id: 345,
            name: 'Large',
            abbreviation: 'L',
            options: [
                { id: 3, color: 'Black', hex: '#000', material: 'Silk', quantity: 1 }
            ]
        },
        {
            id: 456,
            name: 'X-Large',
            abbreviation: 'XL',
            options: [
                { id: 4, color: 'Black', hex: '#000', material: 'Silk', quantity: 0 }
            ]
        }
    ],
    name: 'The Special Pantsuit',
    description:
        "This is the coolest pantsuit you've ever seen. Fits like a dream. Wear this everywhere, and nowhere.",
    bullets: [
        'So baggy and yet hugs all the right places',
        'Big hidden pockets',
        'Front zipper so you can zip yourself in',
        'Silk material, reinforced stitching'
    ],
    images: [image1, image2, image3, image4, image5],
    price: 120.0,
    productDetails: [
        {
            description:
                'These are sized a little small. We advise ordering the next size up from what you normally wear.',
            label: 'Which size?'
        },
        {
            description:
                'These are sized a little small. We advise ordering the next size up from what you normally wear.',
            label: "What's it like"
        },
        {
            description:
                'These are LOVED for their lustrous shine, beautiful drape, and sumptuous feel, these jump suits are made of silk.',
            label: 'Materials'
        }
    ]
};

export default mockProduct;
