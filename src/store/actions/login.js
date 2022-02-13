import { ERROR, SET_USER} from '../types'
import axios from 'axios'

export const login = (id) => async dispatch => {
  try{
    const res = await axios.get(`http://localhost:3000/users/${id}`)
    dispatch( {
        type: SET_USER,
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