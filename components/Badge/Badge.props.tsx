import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface BadgeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'small' | 'medium';
  color: 'light' | 'red' | 'grey' | 'green' | 'primary';
  href?: string;
  children: ReactNode;
}
