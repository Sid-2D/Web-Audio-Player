import React, {Component} from 'react'
import './card.css'

class card extends Component {
    render() {
        if (this.props.type === 'Search') {
            return (
                <div className="card">
                <div className="card-header">{this.props.header}</div>
                <div className="card-control"><a><i className="ion-play"></i></a></div>
                <div className="card-control"><a><i className="ion-android-download"></i></a></div>
                <div className="card-load clearfix"><a><i className="ion-android-refresh"></i></a></div>
                </div>
            )
        }
        return (
            <div className="card">
                <div className="card-header">{this.props.header}<span className="card-reload clearfix"><i className="ion-android-refresh"></i></span></div>
                <div className="player">
                    <audio controls>
                        <source src="" />
                        Your browser does not support the audio element.
                    </audio>
                    <div className="panel-content">
                        Hello<br />
                        <div className="panel-inner">
                            Bunch of things go here<br />
                            Line<br />
                            Line<br />
                            Line<br />
                        </div>
                    </div>
                </div>
                <div className="panel"><i className="ion-chevron-down"></i></div>
            </div>
        )
    }
}

export default card