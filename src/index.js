import {createStore} from 'redux';

import './index.css';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'ZERO':
      return 0;
    default:
      return state;
  }
};

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const zero = () => ({type: 'ZERO'});

const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});
document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});
document.getElementById('zero').addEventListener('click', () => {
  store.dispatch(zero());
});

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);