import React from 'react'
import ButtomImg from '../images/add.png'
import { Link } from 'react-router-dom'

const AddButton = () => (
<Link to="/exercise/new">
<img src={ButtomImg} className = "Fitness-Add" Alt="Foto"/>
</Link>)
export default AddButton