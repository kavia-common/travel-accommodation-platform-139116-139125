import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage headline', () => {
  render(<App />);
  const headline = screen.getByText(/We Offer Best Services/i);
  expect(headline).toBeInTheDocument();
});
