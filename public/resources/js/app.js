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
}