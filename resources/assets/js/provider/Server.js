import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { compose } from 'redux'
import { createMemoryHistory, match, Router} from 'react-router'
import composeStore from '../store'
import routes from '../routes'
import { renderToStaticMarkup } from 'react-dom/server'

let memoryHistory = createMemoryHistory(context.payload.url)

const { store, actions, history } = composeStore(
    memoryHistory,
    compose
)

class ServerProvider extends Component {
    /**
     * Works like an hoc adds current props plus actions
     * in every component that is in our routes
     * @param  {[type]} Component     [description]
     * @param  {[type]} existingProps [description]
     * @return {[type]}               [description]
     */
    withActions(Component, existingProps) {
      const { props } = this
      const allProps = {
          ...props,
          ...existingProps,
          actions
      }

      return <Component {...allProps} />
    }
    render() {
        const { withActions } = this
        return(
            <Provider store={store}>
                <Router history={history}
                        createElement={withActions.bind(this)}
                        routes={routes}/>
            </Provider>
        )
    }
}

console.log(renderToStaticMarkup(<ServerProvider {...context.payload} />))
