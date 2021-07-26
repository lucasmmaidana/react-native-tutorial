import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Search from '../components/Search';

let component;

const handleSearch = jest.fn();

describe('<Search />', () => {
  beforeEach(() => {
    component = render(<Search handleOnChange={handleSearch} />);
  });
  it('Renders correctly', () => {
    expect(component).toBeDefined();
  });
  it('Renders a TextInput with correct placeholder', () => {
    const input = component.getByPlaceholderText('Search by name');
    expect(input).toBeDefined();
  });
  it('Calls the handler function when the value is changed', () => {
    const input = component.getByPlaceholderText('Search by name');
    fireEvent.changeText(input, 'zaza');
    expect(handleSearch).toHaveBeenCalled();
  });
});
