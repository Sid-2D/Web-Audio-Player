let UIController = ((uiService, templates) => {

    return {
        
        initUI: () => {
            uiService.enableTabs()
            uiService.enableUploads()
        },
        
        updateNode: (node, attributes, updates) => {
            attributes.forEach((attribute, index) => {
                node.setAttribute(attribute, updates[index])
            })
        }

    }
    
})(uiService, templates)
