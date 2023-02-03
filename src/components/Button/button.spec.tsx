import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { Button, ButtonProps } from '.';
import { render, screen, userEvent } from '../../utils/test-utils';

import React from 'react';

const makeSut = (props: ButtonProps) => {
  const sut = render(<Button {...props} />);
  const user = userEvent.setup();

  return {
    ...sut,
    user
  };
};

describe('<Button />', () => {
  it('should render button', () => {
    makeSut({ children: 'Click', bgColor: '#fff' });

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
