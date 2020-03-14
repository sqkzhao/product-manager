import React from 'react'
import { Link } from '@reach/router'
import axios from 'axios'

const ProductList = (props) => {
    // const { update, setUpdate } = props
    // const onClickHandler = e => {
    //     console.log(e.target.id)
    //     navigate(`/${e.target.id}`)
    // }
    const { removeFromDom } = props

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                // setUpdate(!update)
                removeFromDom(productId)    // from Main.js
            })
    }

    return(
        <>
            <h1>All Products:</h1>
            {props.products.map((product, i) => {
                // return <p key={i} onClick={onClickHandler} id={product._id}>{product.title}</p>
                return <p key={i}>
                    <Link to={product._id}>{product.title}</Link> | 
                    <button onClick={ (e) => {deleteProduct(product._id)} }>Delete</button>
                </p>
            })}
        </>
    )
}
export default ProductList