import React, { useState, useEffect } from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios'
import DeleteButton from '../components/DeleteButton'

export default (props) => {
    const [update, setUpdate] = useState(false) // not in use
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])

    return( 
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p><Link to={"/"+product._id+"/edit"}>Update</Link></p>
            <DeleteButton id={product._id} update={update} setUpdate={setUpdate}/>
        </div>
    )
}