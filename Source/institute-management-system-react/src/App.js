import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EmptyComponent from './components/EmptyComponent';
import AddTeacher from './components/AddTeacher';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
              <Switch>
                <Route path="/empty" component={EmptyComponent}></Route>
                <Route path="/employee" component={ListEmployeeComponent}></Route>
                <Route path="/add-teacher" component={AddTeacher}></Route>
              </Switch>
          </div>
          <FooterComponent />
        </div>
      </Router>
    
    </div>
  );
}

export default App;
