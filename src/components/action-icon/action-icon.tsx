import {
  ActionIcon as ActionIcon$1,
  ActionIconProps as ActionIconProps$1,
  createPolymorphicComponent,
} from '@mantine/core';
import { forwardRef } from 'react';
import { Ripple, useActionIcon } from '~~';

export interface ActionIconProps
  extends ActionIconProps$1,
    Omit<React.ComponentPropsWithoutRef<'button'>, keyof ActionIconProps$1> {}

export const ActionIcon = createPolymorphicComponent<'button', ActionIconProps>(
  forwardRef<HTMLButtonElement, ActionIconProps>((props, ref) => {
    const { getRippleProps, getActionIconProps } = useActionIcon({
      ...props,
      ref,
    });

    return (
      <ActionIcon$1 {...getActionIconProps()}>
        {props.children}

        <Ripple {...getRippleProps()} />
      </ActionIcon$1>
    );
  }),
);
