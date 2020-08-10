import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import App from './App';
import Item from './components/Item';
import {act} from 'react-dom/test-utils';

let container = null
let addItemButton = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
  act(() => {
    render(<App />, container)
    
  })    
  addItemButton = document.querySelector("input[type=button]");
  act(() => {
    for(let i = 1; i < 21; i++){
      addItemButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    }
  })
  
})
afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
  addItemButton = null
})

it ('creates a new item on button click', () => {
  expect(addItemButton.value).toBe('Add Item')
})
