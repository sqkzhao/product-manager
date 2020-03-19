import React from 'react'

const Form = (props) => {
    const {title, price, description, setTitle, setPrice, setDescription, onSubmitHandler} = props
    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label>
                <input type="text" name="title" value={title || ''} onChange = { e => setTitle(e.target.value) } name="title" value={title}/>
            </p>
            <p>
                <label>Price: </label>
                <input type="number" step=".01" name="title" value={title || ''} onChange = { e => setPrice(e.target.value) } name="price" value={price || ''}/>
            </p>
            <p>
                <label>Description: </label>
                <input type="text" name="title" value={title || ''} onChange = { e => setDescription(e.target.value) } name="description" value={description}/>
            </p>
            <input type="submit" value="Create" />
        </form>
    )
}
export default Form