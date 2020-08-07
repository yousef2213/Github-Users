import React from 'react';
import Logo from '../images/login-img.svg';
import {Link} from 'react-router-dom'
export default function error() {
    return (
        <div className='container-fluid m-0 p-0'>
            <div className="banner">
                <img className="error-img" src={Logo} alt='logo-img' />
                <h5 className="pt-4 Error">404</h5>
                <h5 className="Error-h5">page not found</h5>
                <Link to="/" className="btn btn-er">Returen Home</Link>
            </div>
        </div>
    )
}
