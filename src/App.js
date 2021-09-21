import './App.css';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getCovid from './redux/covidslices';
import GlobalInfo from './components/pages/homepage';
import Details from './components/pages/countryinfo';

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getCovid());
  }, []);

  const countries = useSelector((state) => state.covidReducer.covidGlobal);
  const routes = countries.map((country) => (
    <Route key={country.name[0]} path={`/${country.name[0].toLowerCase()}`}>
      <Details name={country.name[0]} />
    </Route>
  ));

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <GlobalInfo />
          </Route>
          { routes }
        </Switch>
      </Router>
    </div>
  );
};

export default App;
