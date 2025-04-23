import { useCallback, useState } from 'react';
import { getUniqueID, RippleType } from '~~';

export interface UseRippleProps {}

export function useRipple(props: UseRippleProps) {
  const [ripples, setRipples] = useState<RippleType[]>([]);

  const onClick = useCallback((event: React.MouseEvent) => {
    const trigger = event.currentTarget;
    const rect = trigger.getBoundingClientRect();

    const size = Math.max(trigger.clientWidth, trigger.clientHeight);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    setRipples((prevRipples) => [
      ...prevRipples,
      {
        key: getUniqueID(prevRipples.length.toString()),
        size,
        x,
        y,
      },
    ]);
  }, []);

  const onClear = useCallback((key: React.Key) => {
    setRipples((prevState) => prevState.filter((ripple) => ripple.key !== key));
  }, []);

  return { ripples, onClear, onClick, ...props };
}

export type UseRippleReturn = ReturnType<typeof useRipple>;
