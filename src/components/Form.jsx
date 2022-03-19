import React, {useState} from 'react'
import {useHistory} from "react-router-dom"

const Form = () => {
    const [category, setCategory] = useState("")
    const [id, setId] = useState("")
    const history = useHistory()

    const handleSubmit =(e) =>{
        e.preventDefault()
        history.push(`/${category}/${id}`)
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>  Search for:  </label>
            <select name="category" value={category} onChange={e=>setCategory(e.target.value)}>
                <option hidden>Select Category</option>
                <option value="people">People</option>
                <option value="planet">Planets</option>
            </select>
            <label>  ID:  </label>
            <input type="text" name="id" value={id} onChange={e=>setId(e.target.value)} />
            <button>Search</button>
        </form>
    </div>
    )
}

export default Form