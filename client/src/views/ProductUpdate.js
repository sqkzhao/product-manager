import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default (props) => {
    const { id } = props
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                // console.log(res.data)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
    }, [])

    const updateProduct = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/products/'+id, {
            title,
            price,
            description
        })
            .then(updateProduct => console.log(updateProduct))
    }

    return(
        <div>
            <h1>Update</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title: </label>
                    <input type="text" name="title" value={title || ''} onChange={(e) => setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price: </label>
                    <input type="text" name="price" value={price || ''} onChange={(e) => setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description: </label>
                    <input type="text" name="description" value={description || ''} onChange={(e) => setDescription(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}