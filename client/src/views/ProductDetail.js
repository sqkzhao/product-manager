import React, { useState, useEffect } from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios'

export default (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])

    const deleteProduct = e => {
        // console.log(e.target.id)
        axios.delete('http://localhost:8000/api/products/' +  e.target.id)
            .then(res => navigate('/'))
    }

    return(
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p> <Link to={"/"+product._id+"/edit"}>Update</Link></p>
            <p> <button onClick={deleteProduct} id={product._id}>Delete</button></p>
        </div>
    )
}