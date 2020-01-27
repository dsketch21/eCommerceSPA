# Dustin Cooper - Demo eCommerce SPA

This page was created as part of a take home tech test for an ecommerce start up.

https://brilliant-react-spa.herokuapp.com/

## How To Run the App

```
git clone git@github.com:dsketch21/BrilliantTest.git

cd BrilliantTest

npm i

npm run dev

Open your browser and point it to: http://localhost:9000/

```

## Scenario

Each day, we want to offer a fresh look to our customers. We need a single page app which will allow your
customers to see the article of clothing, which will always be modeled by one of our staff members. In order to see the garment clearly from most angles, multiple images will be needed. We aren't sure how best to display these images or make them available for view, however, we feel it's best to have the images be as large as reasonably possible so that our customers can make a good purchase decision. We offer multiple sizes, colors, and materials. Our first garment is a black jumpsuit and will only be offered in the color black silk.

!!! -- Tomorrow's garment will be three different colors and will be offered in cotton, silk, or nylon.

## API Modifications

The demo API given has a vareity of issues within. Below you will find the original API response and the updated response.

### Initial API:

```
{
  "id": 890,
  "sizes": [
    {"id": 123, "name": "Small", "abbreviation": "S", "quantity": 57}, 
    {"id": 234, "name": "Medium", "abbreviation": "M", "quantity": 43},
    {"id": 345, "name": "Large", "abbreviation": "L", "quantity": 1},
    {"id": 456, "name": "X-Large", "abbreviation": "XL", "quantity": 0}
  ],
  "name": "The Special Pantsuit",
  "description": "This is the coolest pantsuit you've ever seen. Fits like a dream. Wear this everywhere, and nowhere.",
  "bullets": [
    "So baggy and yet hugs all the right places",
    "Big hidden pockets",
    "Front zipper so you can zip yourself in",
    "Silk material, reinforced stitching"
  ],
  "images": [
    {"order": 0, "url": "Assets/jumpsuit-1.jpg"},
    {"order": 1, "url": "Assets/jumpsuit-2.jpg"},
    {"order": 2, "url": "Assets/jumpsuit-3.jpg"},
    {"order": 3, "url": "Assets/jumpsuit-4.jpg"},
    {"order": 4, "url": "Assets/jumpsuit-5.jpg"}
  ],
  "materials": [
    "silk"
  ],
  "price": 12000,
  "sizeInfo": "These are sized a little small. We advise ordering the next size up from what you normally wear.",
  "materialInfo": "100% silk which feels very nice. These are meant to be warn slightly baggy so that they are
  comfortable. Zipper front with rolled up sleeves. Hip pockets on the front."
}
```

### Updated API:

The follow adjustments have been made:

* The price of product is an int, should be a float value.
* Product descriptions currently is 2 static values. It should be in an array of description data. The array should be made of objects with a label and description value. This will allow custom content as needed.
* Sizes do not have colors available in that size.
* Stock count should correlate to size + option not just size option. 
* Order value on the array of images is irrelevant and adds bloat.
* Materials needs to be part of the product details so marketing can deliver copy on the page to describe the materials appropriately. A list of materials is not really enough to give the user proper understanding.
* The photo array has relative paths, assets need to be uploaded to S3 and S3 urls should be provided to all image assets.

```
{
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
}
```