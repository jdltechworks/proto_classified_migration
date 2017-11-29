const Product = {
    images: {
        tag: 'input',
        type: 'file',
        custom: true,
        name: 'images',
        validator: 'isFile'
    },
    title: {
        tag: 'input',
        type: 'text',
        name: 'title',
        validator: 'isAlpha'
    },
    categories: {
        tag: 'input',
        type: 'text',
        options: [
            'Select a category'
        ],
        name: 'categories',
        validator: 'isArray'
    },
    price: {
        tag: 'input',
        type: 'float',
        name: 'price',
        validator: 'isNumber'
    }
}

export default Product
