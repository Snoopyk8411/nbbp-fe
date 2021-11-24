import { render, screen } from '@testing-library/react';
import { WelcomePage } from 'layout/welcome';

describe('Welcome page', () => {
  it('successfully rendered', () => {
    render(<WelcomePage />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});