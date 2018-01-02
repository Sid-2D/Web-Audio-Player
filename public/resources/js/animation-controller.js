let animationController = ((uiCtrl) => {
    
    let searchBtn = document.querySelector('#searchBtn')
    
    return {
        
        tabs: {
            tabSwitch: (tabRegions, index) => {
                tabRegions[index].style.animation = 'fadeIn 0.5s';
            },
            
            afterFadeTab: (tabRegions, index, cb) => {
                tabRegions[index].style.animation = '';
                tabRegions[index].style.animation = 'fadeOut 0.5s';
                setTimeout(cb, 500)
            }
        },
        
        controls: {
            playPauseFade: () => {
                
            }
        }
        
    }
})(UIController)