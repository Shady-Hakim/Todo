/**
 * @format
 */

import 'react-native';
import React from 'react';
import AllList from '../src/screens/allList/allList';
import renderer from 'react-test-renderer';
jest.useFakeTimers();

test('item render', () => {
    const component = renderer.create(<AllList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});