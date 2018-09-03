import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

it('should render App', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
