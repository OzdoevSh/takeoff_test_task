import { ERROR, SET_USER_DATA} from '../types'
import axios from 'axios'

export const getUserData = () => async dispatch => {
  try{
    const res = await axios.get(`http://localhost:3000/users`)
    dispatch( {
        type: SET_USER_DATA,
        payload: res.data
    })
}
  catch(e){
      dispatch( {
          type: ERROR,
          payload: console.log(e),
      })
  }

}