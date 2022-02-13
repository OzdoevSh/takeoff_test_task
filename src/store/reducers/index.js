import { combineReducers } from 'redux'
import addContact from './addContact'
import contactsReducer from './contacts'
import deleteContact from './deleteContact'
import login from './login'
import searchContact from './searchContact'
import userReducers from './userReducer'
import editContact from './editContact'

const rootReducer = combineReducers({
  users: userReducers,
  user: login,
  contacts: contactsReducer,
  addContact: addContact,
  deleteContact: deleteContact,
  searchContact: searchContact,
  editContact: editContact,
})

export default rootReducer