import React from 'react'
import exerciseImg from '../images/exercise.png'
import circleImg  from '../images/circles.png'
import './styles/Card.css'

class Card extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            img:exerciseImg
        }
    }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             image: {exerciseImg}
    //         })
    //     }, 5000);
    //}
    render(){
        const {title, description, img, leftColor, rightColor}= this.props
        return (

            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage:`url(${circleImg}), linear-gradient(to right,${leftColor}, ${rightColor})`}}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                         <img src={img} className="float-right" alt="foto"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card