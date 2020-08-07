import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
} from 'react-router-dom'
import SearchPage from './SearchSection/PokeSearch.js'
import DetailsPage from './DetailPage/DetailPage.js'
import './App.css';
import Header from './Header.js';



class App extends React.Component {
  render() {
    return (
      <>
      <div>
            <Router>
                <Header />
                <Switch>
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <SearchPage {...routerProps} />} 
                    />
                    <Route 
                        path="/detail/:myPokemonId" 
                        exact
                        render={(routerProps) => <DetailsPage {...routerProps} />} 
                    />
                </Switch>
            </Router>
        </div>
        </>
    )
}
}
  

export default App;