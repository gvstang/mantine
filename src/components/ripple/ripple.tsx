import {
  AnimatePresence,
  LazyMotion,
  m,
  type HTMLMotionProps,
} from 'framer-motion';
import { RippleType, clamp } from '~~';

export interface RippleProps extends React.ComponentPropsWithoutRef<'span'> {
  ripples: RippleType[];
  color?: string;
  motionProps?: HTMLMotionProps<'span'>;
  style?: React.CSSProperties;
  onClear: (key: React.Key) => void;
}

const domAnimation = () =>
  import('framer-motion').then((res) => res.domAnimation);

export function Ripple({
  ripples = [],
  motionProps,
  color = 'currentColor',
  style,
  onClear,
}: RippleProps) {
  return (
    <>
      {ripples.map((ripple) => {
        const duration = clamp(
          0.01 * ripple.size,
          0.2,
          ripple.size > 100 ? 0.75 : 0.5,
        );

        return (
          <LazyMotion key={ripple.key} features={domAnimation}>
            <AnimatePresence mode="popLayout">
              <m.span
                animate={{ transform: 'scale(2)', opacity: 0 }}
                exit={{ opacity: 0 }}
                initial={{ transform: 'scale(0)', opacity: 0.35 }}
                style={{
                  position: 'absolute',
                  backgroundColor: color,
                  borderRadius: '100%',
                  transformOrigin: 'center',
                  pointerEvents: 'none',
                  overflow: 'hidden',
                  inset: 0,
                  zIndex: 0,
                  top: ripple.y,
                  left: ripple.x,
                  width: `${ripple.size}px`,
                  height: `${ripple.size}px`,
                  ...style,
                }}
                transition={{ duration }}
                onAnimationComplete={() => {
                  onClear(ripple.key);
                }}
                {...motionProps}
              />
            </AnimatePresence>
          </LazyMotion>
        );
      })}
    </>
  );
}

Ripple.displayName = 'HeroUI.Ripple';
