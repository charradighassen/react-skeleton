import { render, screen } from '@testing-library/react';
import Home from './pages/Home';

test('Hello World!!!', () => {
  render(<Home />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();

});
