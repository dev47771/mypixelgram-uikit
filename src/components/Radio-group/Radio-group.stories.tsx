import { Meta, StoryObj } from '@storybook/react-vite'
import { RadioGroup } from './Radio-group'
import { RadioItem } from './RadioItem'
import { ComponentPropsWithRef, useState } from 'react'

const meta = {
   title: 'Components/RadioGroup',
   component: RadioGroup,
   tags: ['autodocs'],
   argTypes: {
      onValueChange: { action: 'valueChanged' },
   },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof RadioGroup>

const RadioGroupWrapper = (args: ComponentPropsWithRef<typeof RadioGroup>) => {
   const [selectedValue, setSelectedValue] = useState(args.defaultValue || '')
   return (
      <div>
         <RadioGroup {...args} onValueChange={setSelectedValue}>
            <RadioItem value="1" label="Первый вариант" />
            <RadioItem value="2" label="Второй вариант" />
            <RadioItem value="3" label="Третий вариант" />
         </RadioGroup>

         {!args.groupDisabled && (
            <div className="text-s mt-4">Выбранное значение: {selectedValue}</div>
         )}
      </div>
   )
}

const RadioGroupWithDisabledItem = (args: ComponentPropsWithRef<typeof RadioGroup>) => {
   const [selectedValue, setSelectedValue] = useState(args.defaultValue || '')
   return (
      <div>
         <RadioGroup {...args} onValueChange={setSelectedValue}>
            <RadioItem value="1" label="Первый вариант" />
            <RadioItem value="2" label="Второй вариант" disabled />
            <RadioItem value="3" label="Третий вариант" />
         </RadioGroup>

         <div className="text-s mt-4">Выбранное значение: {selectedValue}</div>
      </div>
   )
}

export const DefaultSelection: Story = {
   args: {
      defaultValue: '1',
   },
   render: args => <RadioGroupWrapper {...args} />,
}

export const NoDefaultSelection: Story = {
   render: args => <RadioGroupWrapper {...args} />,
}

export const WithGroupLabel: Story = {
   args: {
      defaultValue: '1',
      groupLabel: 'Выберете позицию',
   },
   render: args => <RadioGroupWrapper {...args} />,
}
export const FullDisabled: Story = {
   args: {
      groupDisabled: true,
   },
   render: args => <RadioGroupWrapper {...args} />,
}

export const WithDisabledItem: Story = {
   args: {
      defaultValue: '1',
      groupLabel: 'Выберете вариант',
   },
   render: args => <RadioGroupWithDisabledItem {...args} />,
}
