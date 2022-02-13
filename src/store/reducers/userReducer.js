import { SET_USER_DATA, ERROR} from '../types'

const initialState = {
  users: [],
  error: "",
  loading: true,
}

export default function userReducer(state = initialState, action){
  switch(action.type){
    case SET_USER_DATA:
    return {
      ...state,
      users: action.payload,
      loading: false
    }
    case ERROR:
    return{
      ...state,
      users: [],
      loading: false
    }
      default: return state
    }

}