import type { Preview } from '@storybook/react-vite'
import '../src/styles/index.css'
import './style.css'
import '@fontsource-variable/inter'

const preview: Preview = {
  initialGlobals: {
    backgrounds: { value: 'dark' },
  },

  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
