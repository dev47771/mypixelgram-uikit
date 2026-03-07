import { cn } from '@/lib'
import { ComponentPropsWithRef } from 'react'

type Props = ComponentPropsWithRef<'div'>

export const SliderSlide = ({ children, className }: Props) => (
   <div
      className={cn('keen-slider__slide flex h-full w-full items-center justify-center', className)}
   >
      {children}
   </div>
)
