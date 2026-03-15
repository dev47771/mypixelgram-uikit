import { cn } from '@/lib'
import { ComponentPropsWithRef } from 'react'

type Props = ComponentPropsWithRef<'div'>

export const SliderRoot = ({ children, className }: Props) => (
   <div className={cn('relative h-[300px] w-[300px]', className)}>{children}</div>
)
