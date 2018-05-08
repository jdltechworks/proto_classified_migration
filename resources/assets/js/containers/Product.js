import React, { Component } from 'react'
import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'
import { Link } from 'react-router'

import Products from '../components/Product'
import Product from '../components/Product/Main'
import ProductForm from '../components/Forms/ProductForm'

class ProductContainer extends Component {

    render() {
        const { params, csrf_token } = this.props
        const { slug } = params
        if(slug) {
            if(slug !== 'create') {
                return(<Product {...this.props} />)
            }
            return(
                <ProductForm csrf_token={csrf_token} getFormValues={(values) => {
                    console.log(values)
                }}/>
            )
        }
        return(<Products {...this.props} />)

    }
}

export default ProductContainer
