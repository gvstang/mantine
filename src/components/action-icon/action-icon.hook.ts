import { useCallback } from 'react';
import { ActionIconProps, chain, RippleProps, useRipple } from '~~';

interface UseActionIconProps extends ActionIconProps {
  ref: React.Ref<HTMLButtonElement>;
}
export function useActionIcon({
  onClick: handleClick,
  ...props
}: UseActionIconProps) {
  const {
    onClear: onClearRipple,
    onClick: onClickRipple,
    ripples,
  } = useRipple();

  const getActionIconProps = () => {
    const onClick = chain(handleClick, onClickRipple);

    return {
      ...props,
      onClick,
    };
  };

  const getRippleProps = useCallback<() => RippleProps>(
    () => ({ ripples, onClear: onClearRipple }),
    [ripples, onClearRipple],
  );

  return {
    getActionIconProps,
    getRippleProps,
  };
}
