import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'
import axios from 'axios'
import Form from '../components/Form'

export default (props) => {
    const { id } = props
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
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
            .then(updateProduct => {
                navigate('/')
            })
    }

    return(
        <div>
            <h1>Update</h1>
            <Form title={title} price={price} description={description} setTitle={setTitle} setPrice={setPrice} setDescription={setDescription} onSubmitHandler={updateProduct}/>
        </div>
    )
}