import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link,
} from 'react-router-dom'
import SearchPage from './SearchSection/PokeSearch.js'
import DetailPage from './DetailPage/DetailPage.js'
import './App.css';
import Header from './Header.js';



class App extends React.Component {
  render() {
    return (
      <>
      <div>
            <Router>
                <Header>
                  </Header> 
                  <nav>
                    <Link className='navBar' to='/'>Home</Link>
                    <Link className='navBar' to='/detail'>Details</Link>
                  </nav>
                <Switch>
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <SearchPage {...routerProps} />} 
                    />
                    <Route 
                        path="/detail/:myPokemonId"
                        exact
                        render={(routerProps) => <DetailPage {...routerProps} />} 
                    />
                </Switch>
            </Router>
        </div>
        </>
    )
}
}
  

export default App;