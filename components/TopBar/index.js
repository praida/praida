import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './styles.scss'

class TopBar extends React.Component {
  constructor (props) {
    super(props)

    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu () {
    this.props.dispatch({
      type: 'toggleMenu'
    })
  }
  render () {
    return (
      <header className="top-bar">
        <button className="menuToggle" onClick={this.toggleMenu}>
          <svg aria-hidden="true" className="three-bars" version="1.1" viewBox="0 0 12 16">
            <path fillRule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z">
            </path>
          </svg>
        </button>
        PRAIDA
      </header>
    )
  }
}

TopBar.propTypes = {
  dispatch: PropTypes.func.isRequired
}

module.exports = exports = connect()(TopBar)