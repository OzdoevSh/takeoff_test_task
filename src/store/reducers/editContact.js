import {
  IS_CONTACT_EDITED,
  ERROR
} from '../types'

const initialState = {
  success: false
}

export default function editContact(state = initialState, action) {
  switch (action.type) {
    case IS_CONTACT_EDITED:
      return {
        ...state,
        success: true
      }
    case ERROR:
      return {
        ...state,
        success: false
      }
    default: return state
  }
}