import './scss/index.scss'
const redux = require('redux')
const initialState = {
    activeFilters: new Set()
}
const filterButtons = document.getElementsByTagName('button')
const listItems = document.getElementsByTagName('li')

let store = redux.createStore(reducer)
store.subscribe(updateView)
store.dispatch({type: 'init'})

for (let button of filterButtons) {
    button.addEventListener('click', ev => store.dispatch({type: 'filter', filter: button.dataset.cat}))
}

function reducer (state = initialState, action) {
    if (action.type === 'filter') {
        const filter  = action.filter
        const activeFilters = state.activeFilters

        activeFilters.has(filter) ? activeFilters.delete(filter) : activeFilters.add(filter)
    }
    return state;
}

function updateView(){
    const state = store.getState()
    updateFilters(state.activeFilters)
    updateList(state.activeFilters)
}
function updateFilters(activeFilters) {
    for (let button of filterButtons) {
        const cat = button.dataset.cat
        const classList = button.classList;
        (!activeFilters.size || activeFilters.has(cat)) ? classList.add('active') : classList.remove('active')

    }
}
function updateList(activeFilters) {
    for (let item of listItems) {
        const cat = item.dataset.cat
        const classList = item.classList;
        (!activeFilters.size || activeFilters.has(cat)) ? classList.add('active') : classList.remove('active')

    }
}