let templates = (() => {
    return {
        cardSearch: (title, id) => {
            let div = document.createElement('div')
            div.setAttribute('class', 'card')
            div.setAttribute('id', id)
            div.innerHTML = tmpl("card-search", { title }) 
            return div
        },
        
        cardPlayer: (title, id) => {
            let div = document.createElement('div')
            div.setAttribute('class', 'card')
            div.setAttribute('id', id)
            div.innerHTML = tmpl("card-player", { id, title }) 
            return div
        }
    }
})()