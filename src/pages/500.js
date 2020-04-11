import React from 'react'
import '../components/styles/Errors.css'
import FatalErrorimg from '../images/500.png'

const FatalError = () => (
    <div className='text-center'>
        <h1 className="Errar_Text"> Error: 500 Unexpected Error</h1>
        <img src={FatalErrorimg} alt="500 Unexpected Error" className='Error_Image'></img>
    </div>
)
export default FatalError
