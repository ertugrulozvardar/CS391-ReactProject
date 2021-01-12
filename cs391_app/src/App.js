import './App.css';

import MainNav from './MainNav';
import AddMovie from './AddMovie';
import DeleteMovie from './DeleteMovie';
import Movies from './Movies';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
      <MainNav> </MainNav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/AddMovie" component={AddMovie} />
        <Route path="/DeleteMovie" component={DeleteMovie} />
        <Route path="/Movies" component={Movies} />

      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
