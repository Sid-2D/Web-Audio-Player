import React from 'react'
import './Header.css'
import Search from './Search/Search'
import Api from './Api/Api'

const Header = () => (
    <header>
        <div className="row">
            <h1>PLAYER</h1>
        </div>
        <Search />
        <Api />
    </header>
)

export default Header