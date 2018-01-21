import React, { Component } from 'react'
import './Search.css'

class search extends Component {

    state = {
        inputText: ''
    }

    getText = () => this.state.inputText

    setInputText = e => {
        this.setState({inputText: e.target.value})
    }

    render() {
        return (
            <div className="row search-bar">
                <input type="text" placeholder="Search" onChange={e => this.setInputText(e)} />
                <button id="searchBtn" className="btn" onClick={this.props.searchText.bind(null, this.getText())}><i className="ion-android-search"></i></button>
            </div>
        )
    }
}

export default search