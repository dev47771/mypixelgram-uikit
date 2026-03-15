import { Avatar } from './Avatar'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
   title: 'Components/Avatar',
   component: Avatar,
   tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const WithAvatar: Story = {
   args: {
      src: './src/components/Avatar/logo-light.png',
      alt: 'John Doe',
      size: 'md',
   },
}

export const Default: Story = {
   args: {
      size: 'md',
   },
}
