import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCountriesThunk } from '../store'
import { Grid, Header, Table, Container, Flag } from 'semantic-ui-react'

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

    let flags = [{name: 'Egypt', flag: 'eg'},
    {name: 'Brazil', flag: 'br'},
    {name: 'Sweden', flag: 'se'},
    {name: 'Iceland', flag: 'is'},
    {name: 'Uruguay', flag: 'uy'},
    {name: 'Poland', flag: 'pl'},
    {name: 'Peru', flag: 'pe'},
    {name: 'Morocco', flag: 'ma'},
    {name: 'Germany', flag: 'de'},
    {name: 'Russia', flag: 'ru'},
    {name: 'Senegal', flag: 'sn'},
    {name: 'Saudi Arabia', flag: 'sa'},
    {name: 'Belgium', flag: 'be'},
    {name: 'Panama', flag: 'pa'},
    {name: 'France', flag: 'fr'},
    {name: 'Nigeria', flag: 'ng'},
    {name: 'Argentina', flag: 'ar'},
    {name: 'Colombia', flag: 'co'},
    {name: 'Japan', flag: 'jp'},
    {name: 'Costa Rica', flag: 'cr'}]

    let userIdHelper = (id) => {
      let teams = []
      for(let i = 0; i < countries.length; i++){
        if(countries[i].userId === id){
          teams.push(countries[i])
        }
      }
      for(let i = 0; i < teams.length; i++){
        for(let z = 0; z < flags.length; z++){
          if(teams[i].name === flags[z].name){
            teams[i].flag = flags[z].flag
          }
        }
      }
      return teams
    }

    let homum = userIdHelper(1).sort((a, b) => a.id > b.id)
    let patrick = userIdHelper(2).sort((a, b) => a.id > b.id)
    let calvin = userIdHelper(3).sort((a, b) => a.id > b.id)
    let abhi = userIdHelper(4).sort((a, b) => a.id > b.id)
    let burke = userIdHelper(5).sort((a, b) => a.id > b.id)

    return(<Container>
      {/* <Grid columns={3}>
        <Grid.Row>
          <Grid.Column> */}
            <Header as='h3' content="Homum's Teams" style={style.h3} textAlign='center' />

              <Table celled width='200px'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Seed</Table.HeaderCell>
                    <Table.HeaderCell>Country</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {
                    homum.map(countryList => <Table.Row key={countryList.id}>
                      <Table.Cell>{countryList.id}</Table.Cell>
                      <Table.Cell><Flag name={countryList.flag} />{countryList.name}</Table.Cell>
                    </Table.Row>)
                  }
                </Table.Body>
              </Table>

            {/* </Grid.Column> */}
            <Header as='h3' content="Patrick's Teams" style={style.h3} textAlign='center' />

              <Table celled width='200px'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Seed</Table.HeaderCell>
                    <Table.HeaderCell>Country</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {
                    patrick.map(countryList => <Table.Row key={countryList.id}>
                      <Table.Cell>{countryList.id}</Table.Cell>
                      <Table.Cell><Flag name={countryList.flag} />{countryList.name}</Table.Cell>
                    </Table.Row>)
                  }
                </Table.Body>
              </Table>

            {/* <Grid.Column> */}
            <Header as='h3' content="Calvin's Teams" style={style.h3} textAlign='center' />

              <Table celled width='200px'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Seed</Table.HeaderCell>
                    <Table.HeaderCell>Country</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {
                    calvin.map(countryList => <Table.Row key={countryList.id}>
                      <Table.Cell>{countryList.id}</Table.Cell>
                      <Table.Cell><Flag name={countryList.flag} />{countryList.name}</Table.Cell>
                    </Table.Row>)
                  }
                </Table.Body>
              </Table>

            {/* </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column> */}
            <Header as='h3' content="Abhi's Teams" style={style.h3} textAlign='center' />

              <Table celled width='200px'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Seed</Table.HeaderCell>
                    <Table.HeaderCell>Country</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {
                    abhi.map(countryList => <Table.Row key={countryList.id}>
                      <Table.Cell>{countryList.id}</Table.Cell>
                      <Table.Cell><Flag name={countryList.flag} />{countryList.name}</Table.Cell>
                    </Table.Row>)
                  }
                </Table.Body>
              </Table>

            {/* </Grid.Column>
            <Grid.Column> */}
            <Header as='h3' content="Burke's Teams" style={style.h3} textAlign='center' />

              <Table celled width='200px'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Seed</Table.HeaderCell>
                    <Table.HeaderCell>Country</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {
                    burke.map(countryList => <Table.Row key={countryList.id}>
                      <Table.Cell>{countryList.id}</Table.Cell>
                      <Table.Cell><Flag name={countryList.flag} />{countryList.name}</Table.Cell>
                    </Table.Row>)
                  }
                </Table.Body>
              </Table>

            {/* </Grid.Column>
          </Grid.Row>
        </Grid> */}
    </Container>)

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
