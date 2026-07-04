import React from 'react'
const ProductsContext = React.createContext(
    {
        products: [],
        addProduct: () => {},
        deleteProduct: () => {}
    }
)

export default ProductsContext