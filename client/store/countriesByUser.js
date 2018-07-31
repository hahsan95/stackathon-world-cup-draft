import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_COUNTRIES_BY_USER = 'GET_COUNTRIES_BY_USER'

/**
 * INITIAL STATE
 */
const countries = {
  countryList: []
}

/**
 * ACTION CREATORS
 */
const getCountries = countryList => {
  return {
    type: GET_COUNTRIES_BY_USER,
    countryList
  }
}

/**
 * THUNK CREATORS
 */
export const getCountriesThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/countriesByUser')
    const countriesByUser = res.data
    dispatch(getCountries(countriesByUser))
  }
}

/**
 * REDUCER
 */
export default function (state = countries, action) {
  switch (action.type) {
    case GET_COUNTRIES_BY_USER:
      return { ...state, countryList: action.countryList }
    default:
      return state
  }
}
