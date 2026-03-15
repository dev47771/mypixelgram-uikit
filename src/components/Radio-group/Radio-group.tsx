import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { ComponentPropsWithRef, createContext } from 'react'
import { Typography } from '../Typography'

export const RadioGroupContext = createContext({ groupDisabled: false })

type Props = ComponentPropsWithRef<typeof RadioGroupPrimitive.Root> & {
   groupLabel?: string
   groupDisabled?: boolean
}

export const RadioGroup = (props: Props) => {
   const { children, groupLabel, groupDisabled, ...rest } = props

   return (
      <div className="space-y-3">
         {groupLabel && (
            <Typography
               as="legend"
               variant="captionRegular"
               className={groupDisabled ? 'text-light-900' : 'text-light-100'}
            >
               {groupLabel}
            </Typography>
         )}

         <RadioGroupContext.Provider value={{ groupDisabled: !!groupDisabled }}>
            <RadioGroupPrimitive.Root className="space-y-3" disabled={groupDisabled} {...rest}>
               {children}
            </RadioGroupPrimitive.Root>
         </RadioGroupContext.Provider>
      </div>
   )
}
