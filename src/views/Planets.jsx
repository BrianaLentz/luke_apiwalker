import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Planets = () => {
    const {id} = useParams()
    const [planet, setPlanet] = useState("")

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(res=>{
            setPlanet(res.data)
        })
        .catch(err=>console.log(err))
    },[id])

    return (
        <>
        {
            planet ?
                <div>
                    <h1> {planet.name} </h1>
                    <h4> Climate: {planet.climate}</h4>
                    <h4> Terrain: {planet.terrain} </h4>
                    <h4> Surface Water: {planet.surface_water}</h4>
                    <h4> Population: {planet.population}</h4>
                </div>:
                <h2>These aren't the droids you're looking for <img src={require("./obi.jpeg")} alt="obi won" width="150" height="150"></img> </h2>

        }
    
        </>
    )
}
export default Planets