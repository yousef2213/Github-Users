import React from 'react'
import Load from '../images/Loading.gif'


export default function Loading() {
    return (
        <div className="loading">
            <div className="loading_div">
                <img className="load_img" src={Load} alt="loading" />
            </div>
        </div>
    )
}
