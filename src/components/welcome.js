import React from 'react'
import './styles/welcome.css'

function Welcome(props){
    return(
        <div className = "container">
        <div className ="Fitness-User-Info">
            <h1>Hola {props.username}</h1>
            <p> Let s workout to get someone gains!</p>
        </div>
        </div>)
}
export default Welcome