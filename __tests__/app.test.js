import React from 'react';
import { shallow } from 'enzyme';
import App from '../app/App';


describe('App', () => {
  const wrapper = shallow(<App />);
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('Should match Page Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});