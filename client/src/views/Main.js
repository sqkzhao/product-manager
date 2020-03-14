import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

export default () => {
    const [products, setProducts] = useState([])
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
    }, [update])

    const removeFromDom = (productId) => {
        setProducts(products.filter(product => product._id != productId))
    }

    return(
        <div>
            <ProductForm update={update} setUpdate={setUpdate}/>
            <hr />
            <ProductList products={products} removeFromDom={removeFromDom}/>    {/* pass function removeFromDom to props */}
        </div>
    )
}