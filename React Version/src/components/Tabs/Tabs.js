import React, { Component } from 'react'
import './Tabs.css'
import Card from '../../containers/card/card'

class tabs extends Component {
    colors = {
        dark: '#282f31',
        light: '#ecf0f1'
    }

    state = {
        activeTab: null
    }

    hideTab = () => {
        // for (let i = 0; i < props.names.length; i++) {
        //     tabRegions[i].style.display = 'none'
        //     tabs[i].style.color = colors.light
        //     tabs[i].style.background = colors.dark
        // }

        // animationController.tabs.tabSwitch(tabRegions, index)
        // tabRegions[index].style.display = 'block'
        // tabs[index].style.background = colors.light
        // tabs[index].style.color = colors.dark

        // tabRegions[i].style.display = 'none'
        this.style.color = this.colors.light
        this.style.background = this.colors.dark

    }

    selectTab = name => {
        this.setState({ activeTab: name })
    }

    render() {
        return (
            <div>
                <section className="tabs">
                    <div className="row">
                        <ul>
                            {this.props.names.map(name => <li key={name} onClick={this.selectTab.bind(this, name)}><a>{name}</a></li>)}
                        </ul>
                    </div>
                </section>
                <section className="search-list">
                    <Card header={"You were right"} type={"Search"} />
                    <Card header={"Innerbloom"} type={"Search"} />
                </section>
                <section className="player-list">
                    <Card header={"Like An Animal"} src={""} type={"Player"} />
                </section>
            </div>
        )
    }
}

export default tabs