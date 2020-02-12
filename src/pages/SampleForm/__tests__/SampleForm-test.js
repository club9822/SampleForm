import React from 'react';
import SampleForm from '../index';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<SampleForm />).toJSON();
    expect(tree).toMatchSnapshot();
});
