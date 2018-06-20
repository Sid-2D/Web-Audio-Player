let app = ((uiCtrl) => {
    
    function setEventListeners() {
        uiCtrl.initUI()
    }
    
    return {
        init: () => {
            setEventListeners()
            console.log('App has started.')
        }
    }
    
})(UIController)

window.onload = () => {
    app.init()
    sampleControls()
}

// Sample audio player controls

function getTime(seconds) {
    let mins = (seconds / 60)
    let secs = (seconds % 60)
    return parseInt(mins) + ':' + parseInt(secs)
}

function sampleControls() {
    let play = document.querySelector('.controls .ion-play')
    let timeline = document.querySelector('#myRange')
    let timelineDiv = document.querySelector('.timeline')
    let audio = document.querySelector('#sampleAudio')
    let time = document.querySelector('.time')
    let paused = true
    let pressDown = false
    audio.addEventListener('timeupdate', timeUpdate, false)
    audio.addEventListener('canplaythrough', () => {
        timeline.max = audio.duration
        time.innerHTML = getTime(audio.duration)
    }, false);
    timelineDiv.onmousedown = () => {
        console.log('down fire')
        pressDown = true
    }
    timelineDiv.onmouseup = () => {
        console.log('up fire')
        pressDown = false
    }
    function timeUpdate(e) {
        if (!pressDown) {
            timeline.value = e.target.currentTime
            time.innerHTML = getTime(e.target.currentTime)
        }
        // Update time
    }
    
    timeline.addEventListener('change', seekTime, false)
    
    function seekTime(e) {
        audio.currentTime = e.target.value
    }
    
    play.onclick = () => {
        if (paused) {
            audio.play()
            play.className = 'ion-pause'
            paused = false
        } else {
            audio.pause()
            play.className = 'ion-play'
            paused = true
        }
    }
}