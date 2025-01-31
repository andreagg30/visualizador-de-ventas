import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { cn } from '@/utils/helpers';
import { CheckIcon, PriorityHighIcon } from '@/icons';
import LabelInput from '../LabelInput';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | FieldError;
  className?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, className, helperText, icon, ...props }, ref) => {
    const errorMessage = typeof error === 'string' ? error : error?.message;

    const success =
      props?.value && props?.value?.toString().length > 3 && !error;

    return (
      <div className="flex flex-col gap-1">
        {label && <LabelInput>{label}</LabelInput>}
        <div className="relative w-full">
          <input
            ref={ref}
            className={cn(
              'outline-border-input h-12 w-full rounded-sm py-2.5 pl-3 pr-11 text-base outline outline-1',
              {
                'outline-success outline-2': success,
                'outline-error outline-2': error,
              },
              className
            )}
            {...props}
          />
          <div className="absolute bottom-0 right-0 top-0 flex w-10 items-center justify-end pr-3">
            {icon || (error ? (
              <PriorityHighIcon className="fill-error" />
            ) : success ? (
              <CheckIcon className="fill-success" />
            ) : null)}
          </div>
        </div>
        {(errorMessage || helperText) && (
          <span
            className={cn('text-helper-text text-sm', {
              'text-error': error,
            })}
          >
            {errorMessage || helperText}
          </span>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';

export default TextField;
