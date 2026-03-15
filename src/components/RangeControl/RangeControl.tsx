import { ComponentPropsWithRef } from 'react'
import * as SliderRadix from '@radix-ui/react-slider'
import { RangeControlRoot } from './RangeControlRoot'
import { RangeControlTrack } from './RangeControlTrack'
import { RangeControlRange } from './RangeControlRange'
import { RangeControlThumb } from './RangeControlThumb'

export const RangeControl = (props: ComponentPropsWithRef<typeof SliderRadix.Root>) => {
   return (
      <RangeControlRoot {...props}>
         <RangeControlTrack>
            <RangeControlRange />
         </RangeControlTrack>
         <RangeControlThumb />
      </RangeControlRoot>
   )
}
