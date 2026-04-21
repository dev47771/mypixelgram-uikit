// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'
import betterTailwind from 'eslint-plugin-better-tailwindcss'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    js.configs.recommended,
    {
        ignores: ['node_modules/**', 'dist/**', 'build/**', 'storybook-static/**'],
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            '@typescript-eslint': tsPlugin,
            'better-tailwindcss': betterTailwind,
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                window: 'readonly',
                document: 'readonly',
                navigator: 'readonly',
                URLSearchParams: 'readonly',
                HTMLElement: 'readonly',
                HTMLAnchorElement: 'readonly',
            },
        },
        settings: {
            'better-tailwindcss': {
                entryPoint: '.storybook/tailwind.css',
                tailwindConfig: 'tailwind.config.ts',
            },
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...tsPlugin.configs.recommended.rules,
            ...betterTailwind.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-undef': 'off',
            '@typescript-eslint/no-non-null-assertion': 'error',
        },
    },
    {
        files: ['**/*.stories.{js,jsx,ts,tsx}'],
        plugins: {
            storybook,
        },
        rules: {
            ...storybook.configs['flat/recommended'][0].rules,
        },
    },
]

export default eslintConfig