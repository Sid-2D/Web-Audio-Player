import React from 'react'
import './card.css'

const card = props => {
    if (props.type === 'Search') {
        return (
            <div className="card">
                <div className="card-header">{props.header}</div>
                <div className="card-control"><a><i className="ion-play"></i></a></div>
                <div className="card-control"><a><i className="ion-android-download"></i></a></div>
                <div className="card-load clearfix"><a><i className="ion-android-refresh"></i></a></div>
            </div>
        )
    }
    return (
        <div className="card">
            <div className="card-header">{props.header}<span className="card-reload clearfix"><i className="ion-android-refresh"></i></span></div>
            <div className="player">
                <audio controls>
                    <source src="" />
                    Your browser does not support the audio element.
                    </audio>
                <div className="panel-content">
                    Hello<br />
                    {/* <panel className="panel-inner">
                        Bunch of things go here<br />
                        Line<br />
                        Line<br />
                        Line<br />
                    </panel> */}
                </div>
            </div>
            {/* <div className="panel"><i className="ion-chevron-down" onClick="tmp()"></i></div> */}
        </div>
    )
}

export default card