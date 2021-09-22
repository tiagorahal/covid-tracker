import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Filter from '../components/pages/filterinput';
import store from '../redux/configstore';

it('renders correctly', () => {
  const tree = renderer
    .create(<Router><Provider store={store}><Filter /></Provider></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
