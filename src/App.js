import AuthForm from './components/AuthForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Contacts from './components/Contacts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/users/:id" element={<Contacts/>}/>
          <Route path="/" element={<AuthForm/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
