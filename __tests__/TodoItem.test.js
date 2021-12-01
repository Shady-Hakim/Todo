/**
 * @format
 */

import 'react-native';
import React from 'react';
import TodoItem from '../src/components/todoItem/todoItem';
import renderer from 'react-test-renderer';
jest.useFakeTimers();

test('item render', () => {
    const component = renderer.create(<TodoItem />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('item props', () => {
    const item = {id:1, name: 'Task 1', due_date: '9:00AM 12-1-2019', status: 'done'};
    const selected = [1,2,3];
    const onPress = jest.fn();
    const itemAdded = <TodoItem item={item} selected={selected} onClick={onPress}/>;
    expect(itemAdded.props.item).toEqual(item);
    expect(itemAdded.props.selected).toEqual(selected);
});