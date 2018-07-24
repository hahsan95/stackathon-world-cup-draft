import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScoresListThunk } from '../store'

class AllScores extends Component {

  async componentDidMount() {
    if (this.props.scores.length === 0) {
      await this.props.getScoresListThunk()
    }
  }

  render () {
    console.log(this.props)
    return(
      <div>
        <h2>Hello World!</h2>
      </div>
    )
  }
}


const mapStateToProps = (store) => {
  console.log('***POOPALOOP***', store)
  return {
    scores: store.allScores.scores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getScoresListThunk: () => dispatch(getScoresListThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllScores)
