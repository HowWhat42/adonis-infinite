import { Checkbox as ICheckbox, CheckboxControl, CheckboxHiddenInput, CheckboxIndicator, CheckboxLabel, CheckboxRoot } from '@ark-ui/react'
import { CheckIcon } from 'lucide-react'
import React from 'react'

type CheckboxProps = {
  label?: React.ReactNode
  checked: boolean
  setChecked: React.Dispatch<React.SetStateAction<ICheckbox.CheckedState>>
}

export const Checkbox = ({ label, checked, setChecked }: CheckboxProps) => {
  return (
    <CheckboxRoot checked={checked} onCheckedChange={(e) => setChecked(e.checked)}>
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
