let UIController = ((uiService, templates) => {
    
    return {
        
        initUI: () => {
            uiService.enableTabs()
            
        },
        
        updateNode: (node, attributes, updates) => {
            attributes.forEach((attribute, index) => {
                node.setAttribute(attribute, updates[index])
            })
        }

    }
})(uiService, templates)
