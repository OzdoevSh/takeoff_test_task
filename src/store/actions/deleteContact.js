import { ERROR } from '../types'
import axios from 'axios'

export const deleteContact = (id) => async dispatch => {
  try{
    await axios.delete(`http://localhost:3004/contacts/${id}`)
}
  catch(e){
      dispatch( {
          type: ERROR,
          payload: console.log(e),
      })
  }

}
