import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('<Gift />', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gift { ...props } />)

  it('renders properly', () => {
    expect(gift).toMatchSnapshot();
  })

  it('initializes with an empty `person` input', () => {
    expect(gift.find('.input-person').props().value).toBe('');
  })

  it('initializes with an empty `present` input', () => {
    expect(gift.find('.input-present').props().value).toBe('');
  })

  describe('when typing into the `person input`', () => {
    const value = 'Uncle';
  
    beforeEach(() => {
      gift.find('.input-person').simulate('change', { target: { value } })
    })

    it('updates the `person` value', () => {
      expect(gift.find('.input-person').props().value).toBe(value);
    })
  })

  describe('when typing into the present input', () => {
    const value = 'golf clubs';

    beforeEach(() => {
      gift.find('.input-present').simulate('change', { target: { value} });
    })

    it('updates the `present` value', () => {
      expect(gift.find('.input-present').props().value).toBe(value);
    })
  })

  describe('when clicking the `remove gift button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    })

    it('calls the remove callback', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);  
    })
  })
})