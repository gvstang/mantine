import { screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { render } from './render';

import { Button } from '~~';

test('The button should render the text Demo Button', async () => {
  render(<Button>Demo Button</Button>);
  const button = screen.getByText('Demo Button');
  expect(button).toHaveTextContent('Demo Button');
});
