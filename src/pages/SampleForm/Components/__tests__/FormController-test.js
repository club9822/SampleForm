import React from 'react';
import FormController from '../FormController';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<FormController />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
  const tree = renderer.create(<FormController containerStyle{{
    marginTop:0
  }} />).toJSON();
  expect(tree).toMatchSnapshot();
});
