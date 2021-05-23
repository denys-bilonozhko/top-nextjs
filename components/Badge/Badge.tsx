import { BadgeProps } from './Badge.props';
import cn from 'classnames';
import styles from './Badge.module.css';

export const Badge = ({
  size = 'medium',
  children,
  color = 'light',
  href,
  className,
  ...props
}: BadgeProps): JSX.Element => {
  return (
    <div
      className={cn(styles.badge, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.light]: color === 'light',
        [styles.red]: color === 'red',
        [styles.grey]: color === 'grey',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
