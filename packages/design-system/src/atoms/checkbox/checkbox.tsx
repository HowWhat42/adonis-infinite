import { Checkbox as ICheckbox, CheckboxControl, CheckboxHiddenInput, CheckboxIndicator, CheckboxLabel, CheckboxRoot } from '@ark-ui/react'
import { CheckIcon } from 'lucide-react'
import React from 'react'

type CheckboxProps = {
  label?: React.ReactNode
  checked: boolean
  onCheckedChange: (e: ICheckbox.CheckedChangeDetails) => void
}

export const Checkbox = ({ label, checked, onCheckedChange }: CheckboxProps) => {
  return (
    <CheckboxRoot checked={checked} onCheckedChange={onCheckedChange}>
      <CheckboxControl>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxControl>

      <CheckboxHiddenInput />

      {label ?? <CheckboxLabel></CheckboxLabel>}
    </CheckboxRoot>
  )
}
