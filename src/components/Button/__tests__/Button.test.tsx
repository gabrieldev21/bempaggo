import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from '..';

describe('<Button />', () => {
  it('Should render button with children', () => {
    const textChildren = 'TEST_BUTTON_CHILDREN';
    render(<Button>{textChildren}</Button>);
    expect(screen.getByText(textChildren)).toBeInTheDocument();
  });
});
