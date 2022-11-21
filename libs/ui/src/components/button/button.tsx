import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  onClick,
  children,
  className,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(styles['container'], className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
