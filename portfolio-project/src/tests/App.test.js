import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/hebert freitas desenvolvedor web/i);
  expect(titleElement).toBeInTheDocument();
});
