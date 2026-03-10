import { cn } from '@/lib'
import { ComponentPropsWithRef } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const DropDownSeparator = ({
   className,
   ...rest
}: ComponentPropsWithRef<typeof DropdownMenu.Separator>) => {
   return (
      <DropdownMenu.Separator className={cn('border-dark-100 border-t', className)} {...rest} />
   )
}
