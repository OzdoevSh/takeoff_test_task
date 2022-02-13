import { SET_CONTACTS, ERROR} from '../types'

const initialState = {
  contacts: [],
  error: "",
  loading: true,
}

export default function contactsReducer(state = initialState, action){
  switch(action.type){
    case SET_CONTACTS:
    return {
      ...state,
      contacts: action.payload,
      loading: false
    }
    case ERROR:
    return{
      ...state,
      contacts: [],
      loading: false
    }
      default: return state
    }

}