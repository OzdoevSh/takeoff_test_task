import { connect } from 'react-redux';
import Contacts from "./Contacts";
import { getUserData } from '../../store/actions/userAction';
import { getContacts } from '../../store/actions/getContacts';
import { deleteContact} from '../../store/actions/deleteContact';
import { searchContact} from '../../store/actions/searchContact';
import { addContact} from '../../store/actions/addContact';
import { editContact} from '../../store/actions/editContact';



import { login } from '../../store/actions/login';


const mapStateToProps = (state) => ({
  users: state.users.users,
  user: state.user.user,
  contacts: state.contacts.contacts,
  contact: state.searchContact.contact
});

const mapDispatchToProps = {
  getUserData,
  login,
  getContacts,
  deleteContact,
  searchContact,
  addContact,
  editContact,
}
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);