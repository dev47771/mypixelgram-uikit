import { Config } from 'tailwindcss'
import preset from './src/tailwind.preset'

const config: Config = {
   content: ['./src/app/**/*.{ts,tsx,js,jsx}', './src/components/**/*.{ts,tsx,js,jsx}'],
   presets: [preset],
}

export default config
