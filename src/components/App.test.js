import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('<App /> shallow', () => {
  const app = mount(<App />)

  afterAll(() => {
    app.unmount()
  })

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  })
  
  it('initializes with an empty list of gifts', () => {
    expect(app.find('.gift-list').children().length).toEqual(0);
  })

  describe('when the users clicks the `add gift` button', () => {
    const id = 1;

    beforeEach(() => app.find('.btn-add').simulate('click'));
    afterEach(() => app.setState({ gifts: [] }));

    it('adds a new gift to the gift list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    })

    it('creates a <Gift /> component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    })

    describe('and then user wants to delete the gift', () => {
      beforeEach(() => app.instance().removeGift(id));

      it('removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      })
    })
  })
})
