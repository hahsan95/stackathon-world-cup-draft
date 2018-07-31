import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCountriesThunk } from '../store'

class UserTeams extends Component {

  async componentDidMount() {
    if (this.props.countryList.length === 0) {
      await this.props.getCountriesThunk()
    }
  }

  render () {
    return(<div>
      <h1>USER SCORES</h1>
    </div>)
  }

}

const mapStateToProps = (store) => {
  return {
    countryList: store.countriesByUser.countryList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCountriesThunk: () => dispatch(getCountriesThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTeams)
