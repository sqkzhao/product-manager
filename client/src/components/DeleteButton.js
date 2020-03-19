import React from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const DeleteButton = (props) => {
    const { id, update, setUpdate } = props

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                setUpdate(!update)
                navigate('/')
            })
    }

    return(
        <button onClick={(e) => {deleteProduct(id)}}>Delete</button>
    )
}
export default DeleteButton