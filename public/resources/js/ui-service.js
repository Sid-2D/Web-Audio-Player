let uiService = (() => {
    
    let tabRegions = {
        0: document.querySelector('.player-list')
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
    
    function collapse(panel) {
        if (panel.style.maxHeight === "" || panel.style.maxHeight === "0px") {
            panel.style.maxHeight = ele.scrollHeight + 'px'
            return
        }
        panel.style.maxHeight = 0 + 'px'
    }

    return {
        
        enableTabs: () => {
            let tabs = document.querySelectorAll('.tabs li')
            tabs.forEach((tab, index) => {
                tab.addEventListener('click', openTab.bind(null,  tabs, index))  
            })
        },
        
        addCardControls: (card) => {
            chevron = card.querySelector('i')
            panel = card.querySelector('.panel-content')
            chevron.addEventListener('click', collapse.bind(panel))
        },
        
        enableUploads: () => {
            let uploader = document.querySelector('#uploader')

            uploader.onclick = () => {
                console.log('Uploader clicked')
            }
        }
    }
    
})()