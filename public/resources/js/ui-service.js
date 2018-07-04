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
            let cardNumber = 0
            document.getElementById('upload-file').addEventListener('change', evt => {
                console.log(evt.target.files)
                // Add new card here
                tabRegions[0].appendChild(templates.cardPlayer(evt.target.files[0].name, 'card-' + cardNumber++))

                // Add audio source
                let target = evt.currentTarget
                if (target.files && target.files[0]) {
                    let reader = new FileReader()
                    reader.onload = e => {
                        document.querySelector(`#audio-card-${cardNumber - 1} source`)
                                .setAttribute('src', e.target.result)
                        console.log('here', document.getElementById('audio-card-' + (cardNumber - 1)))
                    }
                    reader.readAsDataURL(target.files[0])
                }

                // Add Media Element
                // let player = new MediaElementPlayer('audio-card-' + (cardNumber - 1), {
                //     success: (mediaElement, originalNode, instance) => {
                //         console.log(mediaElement)
                //         console.log(originalNode)
                //         console.log(instance)
                //     },
                //     audioWidth: '100%'
                // });
            })
            uploader.onclick = () => {
                document.getElementById('upload-file').click()
            }
        }
    }
    
})(templates)