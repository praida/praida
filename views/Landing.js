import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Landing = (props) => {
  return (
    <div className="wrapper">
      :)
    </div>
  )
}

const propsFromState = {

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
