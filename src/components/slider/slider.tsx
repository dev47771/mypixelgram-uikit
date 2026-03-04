import { Slider } from 'radix-ui'

const sliderRootClasses =
  'touch-none select-none relative flex items-center w-[200px] h-5'

const sliderTrackClasses = 'relative grow h-[3px] bg-black/70 rounded-full'

const sliderRangeClasses = 'absolute h-full bg-white rounded-full'

const sliderThumbClasses =
  'block w-5 h-5 bg-white rounded-[10px] shadow-[0_2px_10px_rgb(0_0_0/40%)] transition-all duration-200 ease-in-out hover:bg-violet-400 focus:outline-none focus:shadow-[0_0_0_5px_rgb(0_0_0/50%)]'

export const SliderDemo = () => (
  <form>
    <Slider.Root className={sliderRootClasses} defaultValue={[50]} max={100} step={1}>
      <Slider.Track className={sliderTrackClasses}>
        <Slider.Range className={sliderRangeClasses} />
      </Slider.Track>
      <Slider.Thumb className={sliderThumbClasses} aria-label="Volume" />
    </Slider.Root>
  </form>
)