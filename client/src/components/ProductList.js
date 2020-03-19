import React from 'react'
import { Link } from '@reach/router'
import DeleteButton from './DeleteButton'

const ProductList = (props) => {
    const { update, setUpdate } = props

    return(
        <>
            <h1>All Products:</h1>
            {props.products.map((product, i) => {
                return <p key={i}>
                    <Link to={product._id}>{product.title}</Link> | 
                    <DeleteButton id={product._id} update={update} setUpdate={setUpdate}/>
                </p>
            })}
        </>
    )
}
export default ProductList