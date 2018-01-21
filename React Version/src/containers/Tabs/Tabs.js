import React, {Component} from 'react'
import './Tabs.css'
import Card from '../../containers/card/card'

class tabs extends Component {
    colors = {
        dark: '#282f31',
        light: '#ecf0f1'
    }

    state = {
        activeTab: 'Search'
    }

    selectTab = name => {
        this.setState({activeTab: name})
    }

    render() {
        const tabLit = {
            background: '#ecf0f1',
            color: 'rgb(59, 59, 59)'
        }
        return (
            <div>
                <section className="tabs">
                    <div className="row">
                        <ul>
                            {this.props.names.map(name => <li key={name} onClick={this.selectTab.bind(this, name)} style={this.state.activeTab === name ? tabLit : {}}><a>{name}</a></li>)}
                        </ul>
                    </div>
                </section>
                <section className="search-list" style={this.state.activeTab === 'Search' ? { display: 'block', animation: 'fadeIn 0.5s' } : { display: 'none', animation: 'fadeOut 0.5s' }}>
                    <Card header={"You were right"} type={"Search"} />
                    <Card header={"Innerbloom"} type={"Search"} />
                    <Card header={this.props.search} type={"Search"} />
                </section>
                <section className="related-list" style={this.state.activeTab === 'Related' ? { display: 'block', animation: 'fadeIn 0.5s' } : { display: 'none', animation: 'fadeOut 0.5s'}}>
                    <Card header={"Kangaroo Court"} type={"Search"} />
                </section>
                <section className="player-list" style={this.state.activeTab === 'Player' ? { display: 'block', animation: 'fadeIn 0.5s' } : { display: 'none', animation: 'fadeOut 0.5s' }}>
                    <Card header={"Like An Animal"} src={""} type={"Player"} />
                </section>
            </div>
        )
    }
}

export default tabs