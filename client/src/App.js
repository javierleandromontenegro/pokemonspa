import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from "./components/Home";
import Error1 from './components/Error1';
import CreatePokemon from './components/CreatePokemon';
import PokeDetails from './components/PokeDetails';

function App() {
  return (
        <BrowserRouter> 
       <div className="App">
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={ Home } />
        <Route exact path="/create" component={ CreatePokemon } />
        <Route exact path="/pokemon/:id" component={ PokeDetails } />
        <Route exact strict path="*" component={ Error1 } />
        </Switch>
          
    </div>
        </BrowserRouter>
  );
}

export default App;
