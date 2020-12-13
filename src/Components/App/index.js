import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ROUTES from '../../Constants/Routes';
import HomePage from '../../Pages/Home';
import LandingPage from '../../Pages/Landing';
import NoMatchPage from '../../Pages/NoMatch';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Navigation from '../Navigation';
import GlobalStyle from './CSS';

const NoMatch = () => (
  <>
    <NoMatchPage />
  </>
);

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <>
        <NavBar />
        {/* <Navigation /> */}
        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route path='*' component={NoMatch} />
        </Switch>
        <Footer />
      </>
    </Router>
  </>
);
export default App;
