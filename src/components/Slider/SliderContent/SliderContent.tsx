import { cn } from '@/lib'
import 'keen-slider/keen-slider.min.css'
import { ComponentPropsWithRef } from 'react'

type Props = ComponentPropsWithRef<'div'>

export const SliderContent = ({ children, className, ref }: Props) => {
   return (
      <div ref={ref} className={cn('keen-slider relative h-full w-full', className)}>
         {children}
      </div>
   )
}
