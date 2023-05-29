import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import AuthService from './components/AuthService';

test('renders learn react link', () => {
  render(<App authService={new AuthService()}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
