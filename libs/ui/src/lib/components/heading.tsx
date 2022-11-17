import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './heading.module.css';

export interface HeadingProps {
  children: ReactNode;
  level: 1 | 2 | 3;
  className?: string;
}

export function Heading({ children, level = 3, className }: HeadingProps) {
  switch (level) {
    case 1:
      return (
        <h1 className={clsx(styles['heading-1'], className)}>{children}</h1>
      );
    case 2:
      return (
        <h2 className={clsx(styles['heading-2'], className)}>{children}</h2>
      );
    case 3:
    default:
      return (
        <h3 className={clsx(styles['heading-3'], className)}>{children}</h3>
      );
  }
}
