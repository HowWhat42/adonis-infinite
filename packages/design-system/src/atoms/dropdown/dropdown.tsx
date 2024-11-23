import { MenuContent, MenuItem, MenuPositioner, MenuRoot, MenuTrigger } from '@ark-ui/react'
import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const dropdown = tv({

})

type DropdownProps = VariantProps<typeof dropdown> & {
  children: React.ReactNode
  actions: {
    label: string
    code: string
    onClick: () => void
  }[]
}

export const Dropdown = ({
  children,
  actions,
}: DropdownProps) => {
  function handleSelect(menuItem: { value: string }) {
    const action = actions.find((action) => action.code === menuItem.value)

    action?.onClick()
  }

  return (
    <MenuRoot onSelect={handleSelect}>
      <MenuTrigger>
        {children}
      </MenuTrigger>

      <MenuPositioner>
        <MenuContent>
          {actions.map((action) => (
            <MenuItem key={action.code} value={action.code} onClick={action.onClick}>
              {action.label}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuPositioner>
    </MenuRoot>
  )
}
