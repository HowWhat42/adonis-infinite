import { FieldErrorText, FieldHelperText, FieldInput, FieldInputProps, FieldLabel, FieldRoot, FieldRootProps, FieldTextarea } from '@ark-ui/react'
import clsx from 'clsx'
import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const field = tv({
  base: 'border border-neutral-low rounded-lg text-neutral-highest bg-neutral-lowest focus:border-brand-medium focus:outline-none disabled:bg-neutral-lower disabled:text-neutral-medium',

  variants: {
    size: {
      small: 'px-3 py-1.5 text-xs',
      medium: 'px-4 py-2 text-sm',
      large: 'px-6 py-3 text-base',
    }
  }
})

const labelVariants = tv({
  base: 'text-neutral-high font-medium',
  variants: {
    size: {
      small: 'text-xs',
      medium: 'text-sm',
      large: 'text-base',
    }
  }
})

type FieldProps = VariantProps<typeof field> & FieldRootProps & {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  invalid?: boolean
  className?: string
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  type?: FieldInputProps['type'] | 'textarea'
  label?: string
  placeholder?: string
  errorMessage?: string
  helpMessage?: string
  autoComplete?: string
}

export const Field = ({
  value,
  onChange,
  invalid,
  className,
  disabled,
  size = 'medium',
  type,
  label,
  placeholder,
  errorMessage,
  helpMessage,
  autoComplete = 'off',
}: FieldProps) => {
  const classes = clsx(
    className,
    field({ size })
  )
  return (
    <FieldRoot invalid={invalid} className='flex flex-col gap-2'>
      <FieldLabel className={labelVariants({ size })}>
        {label}
      </FieldLabel>

        {/* <FieldInput 
          value={value}
          onChange={onChange}
          disabled={disabled} 
          className={classes} 
          type={type} 
          placeholder={placeholder}
          autoComplete={autoComplete}
        /> */}
      
      <FieldInput 
          value={value}
          onChange={onChange}
          disabled={disabled} 
          className={classes} 
          type={type} 
          placeholder={placeholder}
          autoComplete={autoComplete}
        />

      <FieldErrorText className='text-danger-medium text-sm'>
        {errorMessage}
      </FieldErrorText>
      <FieldHelperText className='text-neutral-high text-xs'>
        {helpMessage}
      </FieldHelperText>
    </FieldRoot>
  )
}
