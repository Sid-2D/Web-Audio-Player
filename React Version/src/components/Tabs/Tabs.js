import React from 'react'
import './Tabs.css'

const tabs = (props) => (
    <section class="tabs">
        <div class="row">
            <ul>
                {props.names.map(name => <li><a>{name}</a></li>)}
            </ul>
        </div>
    </section>
)

export default tabs