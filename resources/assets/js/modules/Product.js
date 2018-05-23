import includes from 'lodash/includes'
import { createConstants, createReducer } from 'redux-module-builder'
import {createApiHandler, createApiAction} from 'redux-module-builder/api'
import map from 'lodash/map'
import fetch from 'cross-fetch'

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
    'FETCHING_SINGLE',
    'FETCHED_SINGLE',
    'INITITAL_COLLECTION',
    'REQUESTING_MORE_PRODUCTS',
    'REQUEST_MORE_PRODUCTS_COMPLETE',
    'FETCH_FAILED',
    'CREATING',
    'CREATED',
    'UPDATING',
    'UPDATED',
    'DELETING',
    'DELETED'
)

const increment = value => value += value

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}


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
    create(values) {
        const body = new FormData()
        const headers = {
            "X-CSRFToken": values.csrf_token
        }

        map(values, (value, key) => {
            if(key == 'images') {
                for(var i in value) {
                    body.append('file', value[i])
                }
                return
            }
            body.append(key, value)
        })

        return (dispatch, getState) => {
            return fetch(`/product`, {
                method: 'POST',
                credentials: 'same-origin',
                headers,
                body
            })
            .then((res) => handResponse(res))
            .then((json) => dispatch({ type: types.FETCHED, ...json }))
            .catch(err => {
                console.log(err)
                dispatch({type: types.FETCH_FAILED, message: err})
            })
        }
    },
    update(id, values) {
        const body = new FormData()

        map(values, (value, key) => body.append(key, value))

        return (dispatch, getState) => {
            return fetch(`/product`, {
                method: 'PUT',
                credentials: 'same-origin',
                body
            })
            .then(({ json }) => json())
            .then((json) => dispatch({ type: types.CREATED, ...json }))
            .catch(err => dispatch({type: types.FETCH_FAILED, message: err }))
        }
    },
    delete(id) {
        return (dispatch, getState) => {
            return fetch(`/product/{id}`, {
                method: 'DELETE',
                credentials: 'same-origin'
            })
            .then(({ json }) => json())
            .then((json) => dispatch({ type: types.FETCHED, ...json}))
            .catch(err => dispatch({type: types.FETCH_FAILED, message: err }))
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
    [types.FETCHING_SINGLE]: (state, { collection }) => {
        return {...state, product: {}, related: []}
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
    [types.CREATING](state, { details, message }) {
        return {
            ...state,
            details
        }
    },
    [types.REQUEST_MORE_PRODUCTS_COMPLETE]: (state, { list }) => {
        return { ...state, list: [...state.list].concat(list) }
    },
    [types.FETCHED]: (state, { list }) => {
        return { ...state, list }
    },
    [types.ERROR]: (state, { error }) => {
        return { ...state, ...error }
    }
})
