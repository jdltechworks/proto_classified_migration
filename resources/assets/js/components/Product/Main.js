import React, { Component } from 'react'
import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'
import { Link } from 'react-router'
import chunk from 'lodash/chunk'
import Search from '../Search'
import ImagePreloader from '../Loaders/Image'
import Scroller from '../Scroller'

class Product extends Component {
    componentDidMount() {
        const { props } = this
        const { actions, params } = props
        const { Product } = actions
        const { getProductBySlug } = Product
        getProductBySlug(params.slug)
    }

    render() {
        console.log(this.props)
        return null
    }
}

export default Product
