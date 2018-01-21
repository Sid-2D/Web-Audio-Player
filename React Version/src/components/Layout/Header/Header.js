import React from 'react'
import './Header.css'
import Search from './Search/Search'
import Api from './Api/Api'

const Header = props => (
    <header>
        <div className="row">
            <h1>Player</h1>
        </div>
        <Search searchText={props.searchText} />
        <Api />
    </header>
)

export default Header