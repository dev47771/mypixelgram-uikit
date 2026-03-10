import { cn } from '@/lib'
import { ComponentPropsWithRef } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

type Props = ComponentPropsWithRef<typeof DropdownMenu.Label>

export const DropDownMenuLabel = ({ children, className, ...rest }: Props) => {
   return (
      <DropdownMenu.Label className={cn('text-light-100 px-2 py-3', className)} {...rest}>
         {children}
      </DropdownMenu.Label>
   )
}
