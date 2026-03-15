import { cn } from '@/lib'
import { ComponentPropsWithRef } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const DropDownMenuTrigger = ({
   children,
   className,
   ...rest
}: ComponentPropsWithRef<typeof DropdownMenu.Trigger>) => {
   return (
      <DropdownMenu.Trigger
         className={cn('text-light-100 cursor-pointer bg-transparent outline-none', className)}
         {...rest}
      >
         {children}
      </DropdownMenu.Trigger>
   )
}
