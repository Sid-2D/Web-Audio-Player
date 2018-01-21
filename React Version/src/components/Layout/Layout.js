import React, {Component} from 'react'
import Header from './Header/Header'
import Tabs from '../../containers/Tabs/Tabs'

class layout extends Component {
    state = {
        tabs: ['Search', 'Related', 'Player'],
        search: ''
    }

    searchText = text => {
        this.setState({search: text})
    }
    
    render() {
        console.log('here', this.state.search)
        return (
            <div>
                <Header searchText={this.searchText} />
                <Tabs names={this.state.tabs} />
            </div>
        )
    }
}

export default layout