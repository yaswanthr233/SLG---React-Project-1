import React from 'react'
const ProductsContext = React.createContext(
    {
        products: [],
        productsCount: 0,
        addProduct: () => {},
        deleteProduct: () => {}
    }
)

export default ProductsContext