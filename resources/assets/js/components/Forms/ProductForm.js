import React, { Component } from 'react'
import createForm from './bootstrap'
import model from './models/Product'
import map from 'lodash/map'


class ProductForm extends Component {
    render() {
        const { props } = this
        const { renderField, fields } = this.props
        return(
            <div className="column col-8 col-8-ml-auto col-mr-auto col-ml-auto">
                <div className="panel form-product">
                    <div className="panel-header">
                        <div className="panel-title">
                            <i className="ion-cube"></i> Add product
                        </div>
                    </div>
                    <div className="panel-body">
                        {map(fields, renderField.bind(this))}
                    </div>
                    <div className="panel-footer text-right">
                        <div className="text-right">
                            <button className="btn mr-2">Submit</button>
                            <button className="btn btn-primary">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default createForm('product-create', ProductForm, model)
