import React from 'react'
import './Search.css'

const search = () => (
    <div className="row search-bar">
        <input type="text" id="input" placeholder=" Search" />
        <button id="searchBtn" className="btn"><i className="ion-android-search"></i></button>
    </div>
)

export default search