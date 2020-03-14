import React, { useState } from 'react'
import axios from 'axios'

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
                console.log(res)
                setUpdate(!update)
                setTitle('')
                setPrice()
                setDescription('')
            })
            .catch(err => console.log(err))
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <p>
                <label>Title: </label>
                <input type="text" onChange = { e => setTitle(e.target.value) } name="title" value={title}/>
            </p>
            <p>
                <label>Price: </label>
                <input type="number" step=".01" onChange = { e => setPrice(e.target.value) } name="price" value={price || ''}/>
            </p>
            <p>
                <label>Description: </label>
                <input type="text" onChange = { e => setDescription(e.target.value) } name="description" value={description}/>
            </p>
            <input type="submit" value="Create" />
        </form>
    )
}
export default ProductForm