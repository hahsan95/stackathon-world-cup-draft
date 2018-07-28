import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScoresListThunk } from '../store'

class AllScores extends Component {

  async componentDidMount() {
    if (this.props.scoresList.length === 0) {
      await this.props.getScoresListThunk()
    }
  }


  render () {
    console.log('this.props: ', this.props.scoresList)
    let scores = this.props.scoresList.sort((a, b) => a.points < b.points)
    return(
      <div>
          {
            scores.map(score => <h1 key={score.id}>{score.name}: {score.points}</h1>)
          }
      </div>
    )
  }
}


const mapStateToProps = (store) => {
  console.log('store: ', store)
  // console.log('state: ', this.state)
  return {
    scoresList: store.allScores.scoresList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getScoresListThunk: () => dispatch(getScoresListThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllScores)
