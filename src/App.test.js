import React from 'react';
import ReactDOM from 'react-dom';
import DiscoCat from './DiscoCat';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DiscoCat />, div);
  ReactDOM.unmountComponentAtNode(div);
});
