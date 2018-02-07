import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import api from '../../api'
import './styles.scss'

class RecordAdder extends React.Component {
  constructor (props) {
    super(props)

    this.changeField = this.changeField.bind(this)

    api.getFields(this.props.dispatch)
  }

  changeField (field) {
    return (event) => {
      this.props.dispatch({
        type: 'editField',
        field,
        value: event.target.value
      })
    }
  }

  render () {
    const headers = this.props.fields.map((field) => {
      return (
        <th
          key={`${field._id}:${this.props.ts}`}
        >
          {field.name}
        </th>
      )
    })
    const head = (
      <thead>
        <tr className="headers">
          {headers}
        </tr>
      </thead>
    )
    const nbFields = this.props.fields.length
    const fields = this.props.fields.map((field) => {
      return (
        <td
          key={field._id}
        >
          <input
            type="text"
            onChange={this.changeField(field)}
          />
        </td>
      )
    })
    const newRecord = (
      <tbody>
        <tr className="newRecord">
          {fields}
        </tr>
      </tbody>
    )
    return (
      <div className="record-adder">
        <table>
          {head}
          {newRecord}
        </table>
      </div>
    )
  }
}

RecordAdder.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ts: PropTypes.number.isRequired,
  fields: PropTypes.array.isRequired
}

module.exports = exports = connect()(RecordAdder)