import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/aboutus'
import './App.css';

function App() {
  return (
    <Router>
    <Switch>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
