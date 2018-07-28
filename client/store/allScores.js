import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_SCORES = 'GET_ALL_SCORES'

/**
 * INITIAL STATE
 */
const scores = {
  scoresList: []
}

/**
 * ACTION CREATORS
 */
const getScoresList = scoresList => {
  return {
    type: GET_ALL_SCORES,
    scoresList
  }
}

/**
 * THUNK CREATORS
 */
export const getScoresListThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/users')
    const userScores = res.data
    dispatch(getScoresList(userScores))
  }
}

/**
 * REDUCER
 */
export default function (state = scores, action) {
  switch (action.type) {
    case GET_ALL_SCORES:
      return { ...state, scoresList: action.scoresList }
    default:
      return state
  }
}
