let audioController = (() => {
   let audioContext = new (window.AudioContext || window.webkitAudioContext)()
   
   let data = {
       currentSong: null
   }
   
   function addEffects(audio) {
       audio.onplay()
   }
    
   return { 
       audioContext,
       
       setCurrentSong: (audio) => {
           data.currentSong = audio
           addEffects(audio)
       },
       
       pauseSong: () => {
           data.currentSong.pause()
           data.currentSong.currentTime = 0
       },
       
       getCurrentSong: () => {
           return data.currentSong
       },
       
       addListeners: (audio, gainNode) => {
           // Add onplay event and play
            audio.onplay = () => {
                gainNode.gain.exponentialRampToValueAtTime(1, audioContext.currentTime + 1.5)
                if (data.currentSong && data.currentSong != audio) {
                    pauseSong()
                    setCurrentSong(audio)
                    fillRelated(audio.id)
                }
            }
       }
   }
})()