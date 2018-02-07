import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import api from '../../api'

import Message from 'praida-message'

import isDirty from '../../logic/isDirty'

import './styles.scss'

class ActionBar extends React.Component {
  constructor (props) {
    super(props)

    this.undoAll = this.undoAll.bind(this)
    this.reviewChanges = this.reviewChanges.bind(this)
    this.save = this.save.bind(this)
    this.dismissError = this.dismissError.bind(this)
  }
  undoAll () {
    return this.props.dispatch({
      type: 'undoAll'
    })
  }

  undoAllButton () {
    return (
      <button className="btn undoBtn destructiveBtn" onClick={this.undoAll}>Undo</button>
    )
  }

  reviewChanges () {
    this.props.dispatch({
      type: 'reviewChanges'
    })
  }

  reviewChangesButton () {
    return (
      <button onClick={this.reviewChanges}>Review Changes</button>
    )
  }

  save () {
    api.saveRecord(this.props.dispatch, this.props.values)
      .then(() => {
        // TODO Navigate to thank you page
        console.log('SUCCESS')
      })
  }

  saveButton () {
    return (
      <button className="btn saveBtn primaryBtn" onClick={this.save}>Save</button>
    )
  }

  dismissError () {
    this.props.dispatch({
      type: 'dismissSaveError'
    })
    return false
  }

  render () {
    const dirty = isDirty(this.props.values)
    const classes = [
      'action-bar'
    ]
    if (dirty) {
      classes.push('dirty')
    }
    const error = this.props.saveError
      ? <Message className="messagePanel" level="error" onDismiss={this.dismissError}>
          <p>{this.props.saveError}</p>
        </Message>
      : null
    return (
      <div className={classes.join(' ')}>
        {/*this.undoAllButton()*/}
        {error}
        {/*this.reviewChangesButton()*/}
        {this.saveButton()}
      </div>
    )
  }
}

ActionBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  saveError: PropTypes.object
}

module.exports = exports = connect()(ActionBar)