import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../../components/Home';
import Quote from '../../components/Quote';
import Calculator from '../../components/Calculator';

describe('The Display of the webpage', () => {
  it('Display Home page', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Display Quote page', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Display Calculator page', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
