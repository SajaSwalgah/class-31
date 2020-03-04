import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from '../components/main.js';
import Header from '../components/header';
import Footer from '../components/footer';


Enzyme.configure({ adapter: new Adapter() });

describe('Our components are functioning', () => {
  it('Header renders', () => {
    let header = mount(<Header />);
    let h1 = header.find('h1');
    expect(h1.exists()).toBeTruthy();
  });

  it('Main renders', () => {
    let main = mount(<Main />);
    let span = main.find('span');
    expect(span.exists()).toBeTruthy();
  });

  it('Footer renders', () => {
    let foot = mount(<Footer />);
    let footer = foot.find('footer');
    expect(footer.exists()).toBeTruthy();
  });
});