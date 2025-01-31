import { forwardRef } from 'react';
import TextField, { TextFieldProps } from './TextField';
import { useToggle } from '@/hooks/useToggle';
import IconButton from './IconButton';
import { EyeIcon, EyeOffIcon } from '@/icons';

const PaswordTextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ ...props }, ref) => {
    const { handleToggle, toggle } = useToggle();
    return (
      <TextField
        {...props}
        ref={ref}
        icon={
          <IconButton onClick={handleToggle}>
            {toggle ? (
              <EyeOffIcon className="fill-border-input" />
            ) : (
              <EyeIcon className="fill-border-input" />
            )}
          </IconButton>
        }
        type={toggle ? 'text' : 'password'}
      />
    );
  }
);

PaswordTextField.displayName = 'PaswordTextField';

export default PaswordTextField;
