import React from 'react'
import Header from './Header/Header'
import Tabs from '../Tabs/Tabs'

const layout = () => {
    let tabs = ['Search', 'Player']
    return (
        <div>
            <Header />
            <Tabs names={tabs} />
        </div>
    )
}

export default layout