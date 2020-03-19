import React, { useState } from 'react'
import axios from 'axios'
import Form from './Form'

const ProductForm = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")
    const { update, setUpdate } = props

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/new', {
            title,
            price,
            description
        })
            .then(res => {
                setUpdate(!update)
                setTitle('')
                setPrice()
                setDescription('')
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Product Manager</h1>
            <Form title={title} price={price} description={description} setTitle={setTitle} setPrice={setPrice} setDescription={setDescription} onSubmitHandler={onSubmitHandler}/>
        </div>
    )
}
export default ProductForm