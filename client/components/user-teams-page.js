import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCountriesThunk } from '../store'
import { Header, Table, Container, Flag } from 'semantic-ui-react'

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

class UserTeams extends Component {

  async componentDidMount() {
    if (this.props.countryList.length === 0) {
      await this.props.getCountriesThunk()
    }
  }

  render () {
    let countries = this.props.countryList
    let flags = [{name: 'Egypt', flag: ''},
    {name: 'Brazil', flag: ''},
    {name: 'Sweden', flag: ''},
    {name: 'Iceland', flag: ''},
    {name: 'Uruguay', flag: ''},
    {name: 'Poland', flag: ''},
    {name: 'Peru', flag: ''},
    {name: 'Morocco', flag: ''},
    {name: 'Germany', flag: ''},
    {name: 'Russia', flag: ''},
    {name: 'Senegal', flag: ''},
    {name: 'Saudi Arabia', flag: ''},
    {name: 'Belgium', flag: ''},
    {name: 'Panama', flag: ''},
    {name: 'France', flag: ''},
    {name: 'Nigeria', flag: ''},
    {name: 'Argentina', flag: ''},
    {name: 'Colombia', flag: ''},
    {name: 'Japan', flag: ''},
    {name: 'Costa Rica', flag: ''}]
    let userIdHelper = (id) => {
      let teams = []
      for(let i = 0; i < countries.length; i++){
        if(countries[i].userId === id){
          teams.push(countries[i])
        }
      }
      return teams
    }

    return(<div>
      <Header as='h3' content='User Teams' style={style.h3} textAlign='center' />
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Seed</Table.HeaderCell>
              <Table.HeaderCell>Country</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              countries.map(countryList => <Table.Row key={countryList.id}>
                <Table.Cell>{countryList.id}</Table.Cell>
                <Table.Cell><Flag name='ae' />{countryList.name}</Table.Cell>
              </Table.Row>)
            }
          </Table.Body>
        </Table>
      </Container>
    </div>)

  }

}

// UserTeams.prototype.userIdHelper = (id) => {
//   let countries = this.props.countryList
//   let teams = []
//   for(let i = 0; i < countries.length; i++){
//     if(countries[i].userId === id){
//       teams.push(countries[i])
//     }
//   }
//   return teams
// }

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
