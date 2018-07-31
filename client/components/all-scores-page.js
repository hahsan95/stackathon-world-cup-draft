import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScoresListThunk } from '../store'
import { Header, Grid, Segment, Table, Container, Image } from 'semantic-ui-react'

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

class AllScores extends Component {

  async componentDidMount() {
    if (this.props.scoresList.length === 0) {
      await this.props.getScoresListThunk()
    }
  }


  render () {
    let scores = this.props.scoresList.sort((a, b) => a.points < b.points)
    return(
      <div>
        <Header as='h3' content='Final Scores Table' style={style.h3} textAlign='center' />
        <Container>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Score</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {
                scores.map(score => <Table.Row key={score.id}>
                  <Table.Cell>
                  <Header as='h4' image>
                    {/* <Image rounded size='mini' src='/images/wireframe/square-image.png' /> */}
                    <Header.Content>
                      {score.name}
                      <Header.Subheader>{score.email}</Header.Subheader>
                    </Header.Content>
                  </Header>
                  </Table.Cell>
                  <Table.Cell>{score.points}</Table.Cell>
                </Table.Row>)
              }
            </Table.Body>
          </Table>
        </Container>
      </div>
    )
  }
}


const mapStateToProps = (store) => {
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
