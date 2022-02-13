import { ERROR, SET_CONTACTS} from '../types'
import axios from 'axios'

export const getContacts = () => async dispatch => {
  try{
    const res = await axios.get(`http://localhost:3004/contacts`)
    dispatch( {
        type: SET_CONTACTS,
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