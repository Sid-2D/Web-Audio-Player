let uiService = (() => {
    
    let tabRegions = {
        0: document.querySelector('.search-list'),
        1: document.querySelector('.player-list')
    }
    
    let colors = {
        dark: '#3b3b3b',
        light: '#ecf0f1'
    }
    
    function openTab(tabs, index) {
        for (let i = 0; i < Object.keys(tabRegions).length; i++) {
            tabRegions[i].style.display = 'none'
            tabs[i].style.color = colors.light
            tabs[i].style.background = colors.dark
        }
        animationController.tabs.tabSwitch(tabRegions, index)
        tabRegions[index].style.display = 'block'
        tabs[index].style.background = colors.light
        tabs[index].style.color = colors.dark
        
    }
    
    function downloadAndPlay(id) {
        
    }
    
    function changeIconPlay(player, loop) {
        if (player.pause) {
            // Add loop
            loop.style.display = 'inline-block'
            
            // Send download request
            setTimeout(() => {
                loop.style.display = 'none'
                player.innerHTML = '<a><i class="ion-pause"></i></a>'
                player.pause = false
            }, 1000)
            return
        }
        player.innerHTML = '<a><i class="ion-play"></i></a>'
        player.pause = true
    }
    
    return {
        
        enableTabs: () => {
            let tabs = document.querySelectorAll('.tabs li')
            tabs.forEach((tab, index) => {
                tab.addEventListener('click', openTab.bind(null,  tabs, index))  
            })
        },
        
        addCardControls: (player, downloader, loop) => {
            player.pause = true
            player.addEventListener('click', changeIconPlay.bind(null, player, loop))
        }
        
    }
    
})()