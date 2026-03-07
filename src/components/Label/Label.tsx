import { Typography } from '../Typography'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'
import { ComponentPropsWithRef } from 'react'

type Props = {
   disabled?: boolean
} & ComponentPropsWithRef<typeof LabelRadix.Root>

export const Label = ({ children, className, htmlFor, disabled, ...rest }: Props) => {
   return (
      <LabelRadix.Root
         className={clsx(disabled ? 'text-light-300' : 'text-light-900', className)}
         htmlFor={disabled ? '' : htmlFor}
         asChild
         {...rest}
      >
         <Typography as={'label'} variant={'captionRegular'}>
            {children}
         </Typography>
      </LabelRadix.Root>
   )
}
