'use client';

import { tv } from 'tailwind-variants';
import { Icon, Text } from '@/components';
import { CounterProps } from './Counter.types';

const counterVariants = tv({
  slots: {
    container: ['gap-2 flex-align-center'],
    content: ['gap-1 flex-align-center', 'overflow-hidden'],
    button: [
      'rounded-full',
      'flex items-center justify-center',
      'transition-colors',
      'border',
      'disabled:bg-neutral-100',
      'disabled:border-neutral-100',
      'disabled:cursor-not-allowed',
    ],
    value: 'justify-center flex-align-center',
  },
  variants: {
    size: {
      small: {
        container: 'h-8',
        button: 'h-7 w-7',
        value: 'h-8 w-8',
      },
      medium: {
        container: 'h-10',
        button: 'h-10 w-10',
        value: 'h-10 w-10',
      },
    },
    hasRightComponent: {
      true: 'gap-2',
    },
    disabled: {
      true: 'opacity-50',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export function Counter({
  value,
  onChange,
  min = 0,
  max,
  size = 'medium',
  rightComponent: RightComponent,
  className,
  disabled = false,
}: CounterProps) {
  const {
    container,
    content,
    button,
    value: valueStyle,
  } = counterVariants({
    size,
    hasRightComponent: !!RightComponent,
    disabled,
  });

  const isDecrementDisabled = value <= min;
  const isIncrementDisabled = max !== undefined && value >= max;

  const getButtonColor = (disabled: boolean) =>
    disabled ? 'neutral-300' : 'teal-400';

  const getButtonBorder = (disabled: boolean) =>
    disabled ? 'border-neutral-100' : 'border-teal-400';

  return (
    <div className={container({ className })}>
      <div className={content()}>
        <button
          type="button"
          className={button({
            className: getButtonBorder(isDecrementDisabled),
          })}
          onClick={() => onChange(Math.max(value - 1, min))}
          disabled={isDecrementDisabled}
          aria-label="Diminuir quantidade"
        >
          <Icon
            name="minus"
            size={size === 'small' ? 16 : 20}
            color={getButtonColor(isDecrementDisabled)}
          />
        </button>

        <div className={valueStyle()}>
          <Text
            variant={size === 'small' ? 'ParagraphSmall' : 'ParagraphMedium'}
            weight="bold"
            color="text-neutral-700"
          >
            {value}
          </Text>
        </div>

        <button
          type="button"
          className={button({
            className: getButtonBorder(isIncrementDisabled),
          })}
          onClick={() =>
            onChange(max !== undefined ? Math.min(value + 1, max) : value + 1)
          }
          disabled={isIncrementDisabled}
          aria-label="Aumentar quantidade"
        >
          <Icon
            name="plus"
            size={size === 'small' ? 24 : 28}
            color={getButtonColor(isIncrementDisabled)}
          />
        </button>
      </div>

      {RightComponent && RightComponent}
    </div>
  );
}
