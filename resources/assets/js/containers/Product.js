import React, { Component } from 'react'
import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'
import { Link } from 'react-router'
import chunk from 'lodash/chunk'
import Search from '../components/Search'
import ImagePreloader from '../components/Loaders/Image'
import Products from '../components/Product'
import Product from '../components/Product/Main'


class ProductContainer extends Component {

    render() {
        const { params } = this.props
        const { slug } = params
        if(slug) {
            return(<Product {...this.props} />)
        }
        return(<Products {...this.props} />)

    }
}

export default ProductContainer
