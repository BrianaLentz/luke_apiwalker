import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const People = () => {
    const {id} = useParams()
    const [people, setPeople] = useState("")

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res=>{
            setPeople(res.data)
        })
        .catch(err=>console.log(err))
    },[id])

    return (
        <>
        {
            people ?
                <div>
                    <h1> {people.name} </h1>
                    <h4> Height: {people.height} cm</h4>
                    <h4> Mass: {people.mass} kg</h4>
                    <h4> Hair Color: {people.hair_color}</h4>
                    <h4> Skin Color: {people.skin_color}</h4>
                </div>:
                <h2>These aren't the droids you're looking for <img src={require("./obi.jpeg")} alt="obi won" width="150" height="150"></img> </h2>
                

        }
        <div>

        </div>
    
        </>
    )
}

export default People