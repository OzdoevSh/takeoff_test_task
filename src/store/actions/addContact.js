import { ERROR } from '../types'
import axios from 'axios'

export const addContact = (user_id, full_name, phone) => async dispatch => {
  try{
    await axios.post(`http://localhost:3004/contacts`, {user_id, full_name, phone })
}
  catch(e){
      dispatch( {
          type: ERROR,
          payload: console.log(e),
      })
  }

}
