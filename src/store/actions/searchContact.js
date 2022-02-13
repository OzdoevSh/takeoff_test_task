import { ERROR, SEARCHED_CONTACT} from '../types'
import axios from 'axios'

export const searchContact = (id, query) => async dispatch => {
  try{
    const res = await axios.get(`http://localhost:3004/contacts/?q=${query}&user_id=${id}`)
    dispatch( {
        type: SEARCHED_CONTACT,
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