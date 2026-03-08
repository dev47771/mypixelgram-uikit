import { mergeConfig } from 'vite'
import type { StorybookConfig } from '@storybook/react-vite'
import tailwindcss from '@tailwindcss/vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)', '../src/**/*.mdx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
  ],
  framework: { name: '@storybook/react-vite', options: {} },
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [tailwindcss()], // подключаем Tailwind через Vite plugin
    }),
}

export default config