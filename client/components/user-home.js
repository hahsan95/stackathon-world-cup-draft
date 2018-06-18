import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'



/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, points} = props
  console.log('***', props)

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <h2>You have {points} points</h2>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    points: state.user.points
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
  // points: PropTypes.number
}
