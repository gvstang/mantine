import { useCallback } from 'react';
import { ButtonProps, chain, RippleProps, useRipple } from '~~';

interface UseButtonProps extends ButtonProps {
  ref: React.Ref<HTMLButtonElement>;
}
export function useButton({ onClick: handleClick, ...props }: UseButtonProps) {
  const {
    onClear: onClearRipple,
    onClick: onClickRipple,
    ripples,
  } = useRipple();

  const getButtonProps = () => {
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
    getButtonProps,
    getRippleProps,
  };
}
