import { SEARCHED_CONTACT, ERROR} from '../types'

const initialState = {
  contact: [],
  error: "",
  loading: true,
}

export default function searchContact(state = initialState, action){
  switch(action.type){
    case SEARCHED_CONTACT:
    return {
      ...state,
      contact: action.payload,
      loading: false
    }
    case ERROR:
    return{
      ...state,
      contact: [],
      loading: false
    }
      default: return state
    }

}