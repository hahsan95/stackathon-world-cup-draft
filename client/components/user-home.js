import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'



/**
 * COMPONENT
 */
export const UserHome = props => {
  const {name, email, points} = props
  console.log('***', props)

  return (
    <div>
      <h3>Welcome, {name}</h3>
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
    points: state.user.points,
    name: state.user.name
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
  points: PropTypes.number,
  name: PropTypes.string
}
