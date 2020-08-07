import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
 import Imgs from '../images/Or.png'

export default function Navbar() {
    const {
        user,
        logout
      } = useAuth0();
      let {
            email,
            name,
            picture
        } = user;
    return (
        <div className="container-fluid text-center bg-white na-Bar">
            <div className="row">
                <div className="col-12 mx-auto">
                   <div className="Nav">
                        <ul className="nav justify-content-center d-flex">
                            <li className="nav-item li-user-info">
                                <img src={picture || Imgs} className="picture-user" alt="user-picture" />
                                <h6 className="p-0 m-0">Welocme, {email || name}</h6>
                            </li>
                            <li className="nav-item">
                                <button className="btn-logout" onClick={() => {logout({ returnTo: window.location.origin })}}>Logout</button>
                            </li>
                        </ul>
                   </div>
                </div>
            </div>
        </div>
    )
}
