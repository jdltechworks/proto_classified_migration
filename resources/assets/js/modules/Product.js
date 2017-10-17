import includes from 'lodash/includes'
import { push } from 'react-router-redux'
import { createConstants, createReducer } from 'redux-module-builder'
import {createApiHandler, createApiAction} from 'redux-module-builder/api'
import map from 'lodash/map'

export const initialState = {
    list: [],
    isFetching: false,
    error: {},
    isAppending: true,
    product: {}
}

export const types = createConstants('product')(
    'FETCHING',
    'FETCHED',
    'ERROR',
    'FETCHING_SINGLE',
    'FETCHED_SINGLE',
    'INITITAL_COLLECTION',
    'REQUESTING_MORE_PRODUCTS',
    'REQUEST_MORE_PRODUCTS_COMPLETE'
)

const increment = value => value += value

const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json'
})


export const actions = {
    setProducts(currCollection) {
        return (dispatch, getState) => {
            let { Product: { list } } = getState()
            return dispatch({
                type: types.INITITAL_COLLECTION,
                list: [].concat(currCollection)
            })
        }
    },
    more(url, take) {
        const _url = new URL(`${url}/product`)

        const params = { skip: increment(take) }
        map(params, (value, key) => {
            _url.searchParams.append(key, value)
        })

        return (dispatch, getState) => {
            dispatch({ type: types.REQUESTING_MORE_PRODUCTS })
            return fetch(_url, {
                method: 'GET',
                headers,
                credentials: 'same-origin'
            }).then(res => {
                if(res.ok) return res.json()
                throw new Error('Error')
            }).then(({ collection }) => {
                dispatch({
                    type: types.REQUEST_MORE_PRODUCTS_COMPLETE,
                    list: collection
                })
            })
        }

    },
    getProductBySlug(slug) {
        return (dispatch, getState) => {
            dispatch({ type: types.FETCHING_SINGLE })
            return fetch(`/product/${slug}`, {
                method: 'GET',
                headers,
                credentials: 'same-origin',
            }).then(res => {
                return res.json()
            })
            .then(({ collection }) => {
                dispatch({ type: types.FETCHED_SINGLE, collection })
            })
            .catch(error => dispatch({ type: types.ERROR, error }))
        }
    }
}


export const reducer = createReducer({
    [types.INITITAL_COLLECTION]: (state, { list }) => {
        return {...state, list}
    },
    [types.FETCHED_SINGLE]: (state, { collection }) => {
        return {...state, ...collection}
    },
    [types.REQUESTING_MORE_PRODUCTS]: (state, action) => {
        return {
            ...state,
            isAppending: true
        }
    },
    [types.REQUEST_MORE_PRODUCTS_COMPLETE]: (state, { list }) => {
        return { ...state, list: [...state.list].concat(list) }
    },
    [types.FETCHED]: (state, { list }) => {
        return { ...state, list }
    },
    [types.ERROR]: (state, { error }) => {
        console.log(error)
        return { ...state, ...error }
    }
})
