import _ from 'lodash'
import { reduxForm } from 'redux-form'
import { LOGIN } from '../models/Login'
import { renderField } from '../helpers'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import validator from '../helpers/validator'
import LoginForm from '../components/Forms/LoginForm'

class Login extends Component {
    render() {
        const { csrf_token } = this.props
        console.log(this.props)
        return (
            <LoginForm csrf_token={csrf_token} getFormValues={(values) => { console.log(values)}} />
        )
    }
}


export default Login
