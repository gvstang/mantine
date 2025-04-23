import {
  Button as Button$1,
  ButtonProps as ButtonProps$1,
  createPolymorphicComponent,
} from '@mantine/core';
import { forwardRef } from 'react';
import { Ripple, useButton } from '~~';

export interface ButtonProps
  extends ButtonProps$1,
    Omit<React.ComponentPropsWithoutRef<'button'>, keyof ButtonProps$1> {}

export const Button = createPolymorphicComponent<'button', ButtonProps>(
  forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { getRippleProps, getButtonProps } = useButton({
      ...props,
      ref,
    });

    return (
      <Button$1 {...getButtonProps()}>
        {props.children}

        <Ripple {...getRippleProps()} />
      </Button$1>
    );
  }),
);
