import 'react-native';
import React from 'react';

import Header from './index';
// import {shallow} from 'enzyme';

import renderer from 'react-test-renderer';
 
// describe('Header', () => {
//   describe('Rendering', () => {
//       it('should match to snapshot', () => {
//           const component = shallow(<Header 
//             renderLeftType='Text'
//             renderLeft='left text'
//             renderCenter='center'
//             renderCenterType='Text'
//             renderRight=' right text'
//             renderRightType='Text'
            
            
            
//             />)
//           expect(component).toMatchSnapshot()
//       });
//   });
// });




test('renders correctly', () => {
  const tree = renderer.create(<Header
    renderLeftType='Text'
                renderLeft='left text'
                renderCenter='center'
                renderCenterType='Text'
                renderRight=' right text'
                renderRightType='Text'
    />).toJSON();
  expect(tree).toMatchSnapshot();
});