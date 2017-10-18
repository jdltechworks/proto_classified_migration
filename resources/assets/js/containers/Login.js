import _ from 'lodash'
import { reduxForm } from 'redux-form'
import { LOGIN } from '../models/Login'
import { renderField } from '../helpers'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import validator from '../helpers/validator'

class Login extends Component {
  componentDidMount() {
  }
  submitForm(values) {
    const { actions } = this.props
  }
  render() {
    let { handleSubmit } = this.props
    return (
      <section className="login clearfix container grid-xl" style={{ paddingTop: '10%' }}>
        <div className="columns">
          <div className="column col-3 col-ml-auto col-mr-auto">
            <form onSubmit={handleSubmit((props) => {this.submitForm(props)})}>
              <div className="panel">
                <div className="panel-header">
                  <div className="panel-title h5">
                    Log in to your account
                  </div>
                  <div className="panel-body">
                  <br />

                  {_.map(LOGIN, renderField.bind(this))}
                  <div className="form-group text-right">
                    <small>New to AWPI? <Link to="/register">Sign-up</Link></small>
                    <button className="btn btn-info">Sign-in</button>
                  </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}


export default reduxForm({
    form:'login',
    validate: validator(LOGIN)
})(Login)
