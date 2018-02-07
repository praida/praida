import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import api from '../api'

import TopBar from '../components/TopBar/'

import Form from 'praida-form'
import '../styles/form.scss'
import FormField from '../components/FormField'
import Menu from '../components/Menu'
import ActionBar from '../components/ActionBar'
import RecordAdder from '../components/RecordAdder'

import './styles.scss'

const Landing = (props) => {
  const actions = [{
    label: 'Next',
    className: 'primaryBtn'
  }]
  return (
    <div className="wrapper">
      <TopBar />
      <Menu
        hidden={props.menuHidden}
        loggedIn={props.loggedIn}
        appVersion={props.appVersion}
      />
      {/*<Form
        className="auth"
        header="Authentication"
        actions={actions}
      >
        <FormField
          id="invitationCode"
          type="text"
          label="Invitation Code"
        />
        <FormField
          id="email"
          type="email"
          label="E-mail"
        />
        <FormField
          id="createPassword"
          type="password"
          label="Create Password"
        />
        <FormField
          id="confirmPassword"
          type="password"
          label="Confirm Password"
        />
      </Form>*/}
      <div className="main">
        <RecordAdder
          fields={props.fields}
          ts={props.ts}
        />
      </div>
      <ActionBar
        values={props.values}
        saveError={props.saveError}
      />
    </div>
  )
}

const propsFromState = {
  // Control
  ts: PropTypes.number.isRequired,

  // Menu
  appVersion: PropTypes.string.isRequired,
  menuHidden: PropTypes.bool.isRequired,

  // Authorization
  loggedIn: PropTypes.bool.isRequired,

  // Fields
  fields: PropTypes.array.isRequired,

  // Values
  values: PropTypes.object.isRequired,

  // Save
  saveError: PropTypes.object
}

Landing.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ...propsFromState
}

function mapStateToProps (state) {
  return Object.keys(propsFromState).reduce((prev, key) => {
    const next = {
      ...prev
    }
    next[key] = state.app[key]
    return next
  }, {})
}

export default connect(mapStateToProps)(Landing)
