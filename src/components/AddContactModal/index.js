import AddContactModal from "./AddContactModal";
import { connect } from 'react-redux';
import { addContact} from '../../store/actions/addContact';
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  addContact,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContactModal);