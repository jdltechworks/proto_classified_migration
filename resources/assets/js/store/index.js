import modules from '../modules'
import thunkMiddleware from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { createApiMiddleware } from 'redux-module-builder/api'
import { bindActionCreatorsToStore } from 'redux-module-builder'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'


const { reducers, actions, initialState } = modules()

let middlewares = [
    thunkMiddleware
]

const creator = (composer) => {
  if(composer) return composer
  return compose
}


export default (historyType, composer) => {
    const create = creator(composer)

    let composeStore = create(
        applyMiddleware(...middlewares),
    )(createStore)

    const store = composeStore(reducers, initialState)

    middlewares.push(
        routerMiddleware(historyType)
    )

    return {
        history: syncHistoryWithStore(historyType, store),
        store,
        actions: bindActionCreatorsToStore(actions, store)
    }
}
