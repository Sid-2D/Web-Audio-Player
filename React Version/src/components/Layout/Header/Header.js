import React from 'react'

const Header = () => (
    <header>
        <div class="row">
            <h1>Web Music Player</h1>
        </div>
        <div class="row search-bar">
            {/* <input type="text" id="input" placeholder=" Search"> */}
                {/* <button id="searchBtn" class="btn"><i class="ion-android-search"></i></button> */}
        </div>
        <div class="row">
            <div class="api-icons">
                api:
                <i class="ion-social-youtube-outline"></i>
                <i class="ion-android-cloud-outline"></i>
            </div>
        </div>
    </header>
)

export default Header