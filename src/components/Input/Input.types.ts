import { IconName } from '../Icon/Icon.types';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconName;
  label?: string;
  className?: string;
}
