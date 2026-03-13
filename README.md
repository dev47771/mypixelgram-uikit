# Usage:

- UI Kit: Technology Stack:
  ```
  React 19 — core library
  TypeScript — type safety
  Tailwind CSS 4 — styling
  Storybook 10 — component documentation
  pnpm — package manager
  ```

  Install dependencies:
  ```
  pnpm install
  ```

- Run storybook:
  ```
  pnpm dev
  ```

- local installation
  ```
  UI Kit:
  pnpm build - сompiles the library into the dist folder.
  pnpm pack - Creates a .tgz archive (npm package) from the compiled library

  folder proect:
  pnpm add ../ui-kit-mypixelgram-1.0.0.tgz

  delete libray:
  pnpm remove ui-kit-mypixelgram
  ```

*
If you don't specify styles, rendering of imported components won't work, since Tailwind doesn't build, but only substitutes class names.

- Needs to be done in the project:
  ```
  colors.css:
  :root {
    /* accent */
    --color-accent-100: #73a5ff;
    --color-accent-300: #4c8dff;
    --color-accent-500: #397df6;
    --color-accent-700: #2f68cc;
    --color-accent-900: #234e99;

    /* success */
    --color-success-100: #80ffbf;
    --color-success-300: #22e584;
    --color-success-500: #14cc70;
    --color-success-700: #0f9954;
    --color-success-900: #0a6638;

    /* danger */
    --color-danger-100: #ff8099;
    --color-danger-300: #f23d61;
    --color-danger-500: #cc1439;
    --color-danger-700: #990f2b;
    --color-danger-900: #660a1d;

    /* warning */
    --color-warning-100: #ffd073;
    --color-warning-300: #e5ac39;
    --color-warning-500: #d99000;
    --color-warning-700: #960;
    --color-warning-900: #640;

    /* dark */
    --color-dark-100: #4c4c4c;
    --color-dark-300: #333;
    --color-dark-500: #171717;
    --color-dark-700: #0d0d0d;
    --color-dark-900: #000;

    /* light */
    --color-light-100: #fff;
    --color-light-300: #f7fbff;
    --color-light-500: #edf3fa;
    --color-light-700: #d5dae0;
    --color-light-900: #8d9094;

    /* other colors */
    --color-primary-100: #212121;
    --color-secondary-100: #4d8df4;
    --color-neutral-100: #b7b7b7;
    --color-error-100: #f00;
  }

  typography.css:
  :root {
    /* line-height */
    --line-height-s: 16px;
    --line-height-m: 24px;
    --line-height-l: 36px;


    /* 
    12px (0.75rem)
    14px (0.875rem) 
    16px (1rem)
    18px (1.125rem)
    20px (1.25rem)
    26px (1.625rem)
    */

    /* font-size */
    --font-size-xs: 0.75rem;
    --font-size-s: 0.875rem;
    --font-size-m: 1rem;
    --font-size-l: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-xxl: 1.625rem;

    /* font-weight */
    --font-weight-regular: 400;
    --font-weight-medium: 500;

    /* stylelint-disable-next-line */
    --font-weight-semiBold: 600;
    --font-weight-bold: 700;
  }

  tailwind.config.ts:
  const config: Config = {
   content: ['./src/app/**/*.{ts,tsx,js,jsx}', './src/components/**/*.{ts,tsx,js,jsx}'],
   theme: {
      extend: {
         colors: {
            accent: {
               100: 'var(--color-accent-100)',
               300: 'var(--color-accent-300)',
               500: 'var(--color-accent-500)',
               700: 'var(--color-accent-700)',
               900: 'var(--color-accent-900)',
            },
            success: {
               100: 'var(--color-success-100)',
               300: 'var(--color-success-300)',
               500: 'var(--color-success-500)',
               700: 'var(--color-success-700)',
               900: 'var(--color-success-900)',
            },
            danger: {
               100: 'var(--color-danger-100)',
               300: 'var(--color-danger-300)',
               500: 'var(--color-danger-500)',
               700: 'var(--color-danger-700)',
               900: 'var(--color-danger-900)',
            },
            warning: {
               100: 'var(--color-warning-100)',
               300: 'var(--color-warning-300)',
               500: 'var(--color-warning-500)',
               700: 'var(--color-warning-700)',
               900: 'var(--color-warning-900)',
            },
            dark: {
               100: 'var(--color-dark-100)',
               300: 'var(--color-dark-300)',
               500: 'var(--color-dark-500)',
               700: 'var(--color-dark-700)',
               900: 'var(--color-dark-900)',
            },
            light: {
               100: 'var(--color-light-100)',
               300: 'var(--color-light-300)',
               500: 'var(--color-light-500)',
               700: 'var(--color-light-700)',
               900: 'var(--color-light-900)',
            },
            misc: {
               primary: {
                  100: 'var(--color-primary-100)',
               },
               secondary: {
                  100: 'var(--color-secondary-100)',
               },
               neutral: {
                  100: 'var(--color-neutral-100)',
               },
               error: {
                  100: 'var(--color-error-100)',
               },
            },
         },
         fontSize: {
            xs: 'var(--font-size-xs)',
            s: 'var(--font-size-s)',
            m: 'var(--font-size-m)',
            l: 'var(--font-size-l)',
            xl: 'var(--font-size-xl)',
            xxl: 'var(--font-size-xxl)',
         },
         lineHeight: {
            s: 'var(--line-height-s)',
            m: 'var(--line-height-m)',
            l: 'var(--line-height-l)',
         },
         fontWeight: {
            regular: 'var(--font-weight-regular)',
            medium: 'var(--font-weight-medium)',
            semiBold: 'var(--font-weight-semiBold)',
            bold: 'var(--font-weight-bold)',
         },
      },
      animation: {
         'pulse-scale': 'pulse-scale 1s ease-in-out infinite',
         spin: 'spin 1s linear infinite',
      },
      keyframes: {
         'pulse-scale': {
            '0%, 100%': {
               transform: 'scale(0)',
               opacity: '0.5',
            },
            '50%': {
               transform: 'scale(1)',
               opacity: '1',
            },
         },
         spin: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
         },
      },
      container: {
         center: true,
         padding: '60px',
         screens: {
            xl: '1280px',
         },
      },
   },
   
   safelist: [
      'line-clamp-[1]',
      'line-clamp-[2]',
      'line-clamp-[3]',
      'line-clamp-[4]',
      'line-clamp-[5]',
      'line-clamp-[6]',
      'line-clamp-[7]',
      'line-clamp-[8]',
   ],
} as unknown as Config
  ```

