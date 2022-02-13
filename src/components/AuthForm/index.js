import AuthForm from "./AuthForm";

import { connect } from 'react-redux';


import { getUserData } from '../../store/actions/userAction';
import { login } from '../../store/actions/login';


const mapStateToProps = (state) => ({
  users: state.users.users,
  user: state.user.user
});

const mapDispatchToProps = {
  getUserData,
  login
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);