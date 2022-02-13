import { SET_USER, ERROR} from '../types'

const initialState = {
  user: {},
  error: "",
  loading: true,
}

export default function loginReducer(state = initialState, action){
  switch(action.type){
    case SET_USER:
    return {
      ...state,
      user: action.payload,
      loading: false
    }
    case ERROR:
    return{
      ...state,
      user: {},
      loading: false
    }
      default: return state
    }

}