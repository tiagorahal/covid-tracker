import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import BackButton from '../components/pages/backbutton';
import store from '../redux/configstore';

it('renders correctly', () => {
  const tree = renderer
    .create(<Router><Provider store={store}><BackButton /></Provider></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
