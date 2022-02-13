import { ERROR} from '../types'
import axios from 'axios'

export const editContact = (id, full_name, phone) => async dispatch => {
  try{
    await axios.patch(`http://localhost:3004/contacts/${id}`, {full_name, phone})
  } 
  catch(e){
      dispatch( {
          type: ERROR,
          payload: console.log(e),
      })
  }

}