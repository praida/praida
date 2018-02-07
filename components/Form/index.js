import React from 'react'

import './styles.scss'

const Form = (props) => {
  const classes = props.className.split(' ').concat(['praida-form'])
  const header = props.header
    ? <header>{props.header}</header>
    : null
  let actionBar = null
  if (props.actions) {
    const hasActionBar = props.actions.length > 0

    if (hasActionBar) {
      const actions = props.actions.map((action) => {
        return (
          <button
            key={action.label}
            className={action.className}
            onClick={action.handler}
          >
            {action.label}
          </button>
        )
      })
      actionBar = <fieldset>{actions}</fieldset>
    }
  }
  return (
    <form className={classes.join(' ')}>
      {header}
      <fieldset>
        {props.children}
      </fieldset>
      {actionBar}
    </form>
  )
}

Form.defaultProps = {
  onReset: null,
  onClear: null,
  onSubmit: null
}

module.exports = exports = Form
