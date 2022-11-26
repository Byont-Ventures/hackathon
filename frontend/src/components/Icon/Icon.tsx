import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

export const Icon: React.FC<FontAwesomeIconProps> = ({
  className,
  ...props
}) => {
  return (
    // Adding a fixed width and height will prevent cumulative layout shift (CLS)
    <FontAwesomeIcon
      data-testid="Icon"
      className={classNames('w-4 h-4', className)}
      {...props}
    />
  );
};
