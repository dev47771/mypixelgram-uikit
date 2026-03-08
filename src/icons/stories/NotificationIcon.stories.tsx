import { Meta, StoryObj } from '@storybook/react-vite'
import { NotificationIcon } from '@/icons'

const meta = {
   title: 'Icons/NotificationIcon',
   component: NotificationIcon,
   tags: ['autodocs'],
   argTypes: {},
   parameters: {
      layout: 'centered',
   },
} satisfies Meta<typeof NotificationIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      count: 5,
   },
}

export const NoBadge: Story = {
   args: {
      count: 0,
   },
}

export const ManyNotifications: Story = {
   args: {
      count: 99,
   },
}
