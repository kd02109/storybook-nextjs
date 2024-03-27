'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

type ButtonVariant = 'disabled' | 'active' | 'transparent';

type Position = 'fixed' | 'relative';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode;
  variant?: ButtonVariant;
  position?: Position;
  type?: 'button' | 'submit' | 'reset';
  isShadow?: boolean;
}

export default function Button({
  children,
  isShadow,
  position = 'relative',
  type = 'button',
  variant = 'active',
  ...props
}: ButtonProps) {
  const tap = {
    scale: 0.98,
    transition: { duration: 0.3 },
  };

  return (
    <motion.button
      className={clsx(
        'w-full max-w-60 min-w-60 h-16 py-2.5 rounded-xl text-lg font-bold cursor-pointer bg-[#6552FE] transition ease-in-out duration-150',
        variant === 'disabled' &&
          'bg-[#D9D9D9] cursor-not-allowed text-[#718096]',
        variant === 'transparent' && 'bg-transparent',
        position === 'fixed' && 'fixed bottom-2.5',
        isShadow && 'shadow-btnShadow',
        props.className,
      )}
      type={type}
      disabled={variant === 'disabled'}
      whileTap={variant === 'active' ? tap : undefined}
      {...props}
    >
      {children}
    </motion.button>
  );
}
