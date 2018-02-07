import React from 'react'

import './styles.scss'

const FormField = (props) => {
  let field
  switch (props.type) {
    case 'text':
      field = (
        <input
          id={props.id}
          type="text"
          onChange={props.onChange}
          defaultValue={props.defaultValue}
          onKeyPress={props.onKeyPress}
        />
      )
      break
    case 'email':
      field = (
        <input
          id={props.id}
          type="email"
          onChange={props.onChange}
          defaultValue={props.defaultValue}
          onKeyPress={props.onKeyPress}
        />
      )
      break
    case 'password':
      field = (
        <input
          id={props.id}
          type="password"
          onChange={props.onChange}
          defaultValue={props.defaultValue}
          onKeyPress={props.onKeyPress}
        />)
      break
    default:
      throw new TypeError(`Invalid FormField type ${props.type}`)
  }
  return (
    <div className="form-field">
      <label htmlFor={props.id}>{props.label}</label>
      {field}
    </div>
  )
}

module.exports = exports = FormField