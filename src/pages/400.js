import React from 'react'
import '../components/styles/Errors.css'
import NotFoundimg from '../images/404.png'

const NotFound = () => (
    <div className='text-center'>
        <h1 className="Errar_Text"> Error: 404 Page Not Found</h1>
        <img src={NotFoundimg} alt="404 NotFound" className='Error_Image'></img>
    </div>
)
export default NotFound
