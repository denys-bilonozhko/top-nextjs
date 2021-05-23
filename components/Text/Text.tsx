import { TextProps } from './Text.props';
import cn from 'classnames';
import styles from './Text.module.css';

export const Text = ({
  size = 'medium',
  children,
  className,
  ...props
}: TextProps): JSX.Element => {
  return (
    <p
      className={cn(styles.text, className, {
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
