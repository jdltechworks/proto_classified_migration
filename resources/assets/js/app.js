import { hydrate } from 'react-dom'
import React, { Component } from 'react'
import ClientProvider from './provider/Client'
import 'whatwg-fetch'

((w, d, target) => {
    const elem = document.getElementById(target)

    const url = elem.dataset.url

    const collection = elem.dataset.collection ? JSON.parse(elem.dataset.collection) : []

    const csrf_token = elem.dataset.csrf_token

    //clear the dom
    for(const x in elem.dataset) {
        delete elem.dataset[x]
    }

    const props = {
        collection,
        csrf_token,
        url
    }


    hydrate(<ClientProvider {...props} />, elem)

})(window, document, 'main')
