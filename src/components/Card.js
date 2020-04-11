import React from 'react'
import circleImg  from '../images/circles.png'
import emptyImg from '../images/empty.png'
import './styles/Card.css'

const Card = ({title, description, img, leftColor, rightColor}) => (

    <div className="card mx-auto Fitness-Card"
    style={{
        backgroundImage:`url(${circleImg}), linear-gradient(to right,${leftColor || '#8299FF'}, ${rightColor || '#687ACC'})`}}>
    <div className="card-body">
        <div className="row center">
            <div className="col-6">
             <img src={img || emptyImg} className="float-right" alt="foto"/>
            </div>
            <div className="col-6 Fitness-Card-Info">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    </div>
</div>
)

export default Card
