import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import {Watchlist} from './component/Watchlist';
import Watched from './component/Watched';
import Add from './component/Add';
import { GlobalProvider } from './context/GlobalState';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              <Watchlist />
            </Route>

            <Route path="/watched">
              <Watched />
            </Route>

            <Route path="/add">
              <Add />
            </Route>
          </Switch>

        </Router>

      </GlobalProvider>
      <Footer/>
    </div>
  );
}

export default App;
