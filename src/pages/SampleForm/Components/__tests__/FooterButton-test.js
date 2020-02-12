import React from 'react';
import FooterButtons from '../FooterButtons';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<FooterButtons />).toJSON();
  expect(tree).toMatchSnapshot();
});
