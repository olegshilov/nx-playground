import { render } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(<Button>Button</Button>);

    expect(baseElement).toBeTruthy();
    expect(getByText('Button')).toBeTruthy();
  });
});
