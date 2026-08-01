# Usage:
- Summary:
  ```
  установка и запуск uikit локально:
  -установка 
  git clone https://github.com/dev47771/mypixelgram-uikit.git
  pnpm install

  -запуск (запускается storybook)
  pnpm dev 

  **
  установка uikit из локального пакета в проект: 
  -сбилдить и установить пакет в проект: 
  pnpm build
  pnpm pack (сгенерируется либа filippsm-ui-kit-mypixelgram-demo-1.0.1.tgz)
  pnpm add ../filippsm-ui-kit-mypixelgram-demo-1.0.1.tgz (версия будет в названии актуальная на момент билда)

  **
  установка из npm пакета (www.npmjs.com) в проект:
  pnpm add @filippsm/ui-kit-mypixelgram-demo

  **
  настройка установленного uikit в проекте:
  в проект в tailwind.config.ts обязательно добавить: './node_modules/@filippsm/ui-kit-mypixelgram-demo/*/.{js,ts,jsx,tsx}'
  content: ['./src/app/**/*.{ts,tsx,js,jsx}', './src/components/**/*.{ts,tsx,js,jsx}', './node_modules/@filippsm/ui-kit-mypixelgram-demo/*/.{js,ts,jsx,tsx}'],

  в проект обязательно добавить: colors.css, typography.css, tailwind.config.ts 

  в tailwind.config.ts можно добавить кастомные переменные:
  -вручную прописать пример ниже есть
  -через импорт:
  import preset from "@filippsm/ui-kit-mypixelgram-demo/tailwind-preset";

  пример импорта в tailwind.config.ts: 
  import preset from "@filippsm/ui-kit-mypixelgram-demo/tailwind-preset";

  const config =  {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}", // свой код приложения
    "./src/components/**/*.{ts,tsx,js,jsx}", // компоненты проекта
    "./node_modules/@filippsm/ui-kit-mypixelgram-demo/**/*.{js,ts,jsx,tsx}", // библиотека
  ],
    presets: [preset],
  };

  export default config;

  *так как ui-kit на tailwind в билд передает только наименования классов, в проекте надо  
  прописывать стили и кастомные переменные. Если не прописать то стилизации импортируемых из uikit компонент не будет.

  ** 
  можно добавить глобальные стили: вручную прописать стили в global.css или через uikit  
  -в ручную: global.css пример ниже есть
  -через импорт:
  import '@filippsm/ui-kit-mypixelgram-demo/global.css'

  может появляться ошибка для glob@10.5.0:
  это неактульная версия у зависимой библиотеки сторибука

  ** 
  ci/cd:
  *чтобы изменения зались в npm обязательно обновить версию в package/version
  -вручную или
  -командой: 
      pnpm version major
      pnpm version minor
      pnpm version patch

  залив изменений автоматически:
  сделать push в main ветку
  
  залив изменений вручную:
  сделать push в main ветку
  pnpm build
  pnpm publish --access public

  как происходит заливка:
  через github actions при пуше в ветку main:
  - билдятся и загружаются изменения в npm (www.npmjs.com)
  - билдится и загружается статическая страница storybook в github pages (dev47771.github.io/mypixelgram-uikit/) 

  **
  импорт компонент, иконок, типов:
  import { X } from '@filippsm/ui-kit-mypixelgram-demo'
  ```
   
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

- local installation (1.0.0 - must be a current version that will be generated)
  ```
  UI Kit:
  pnpm build - сompiles the library into the dist folder.
  pnpm pack - Creates a .tgz archive (npm package) from the compiled library

  install library:
  pnpm add ../@filippsm/ui-kit-mypixelgram-demo-1.0.0.tgz

  delete library:
  pnpm remove ui-kit-mypixelgram
  ```

- npm installation

  ```
  install library:
  pnpm add @filippsm/ui-kit-mypixelgram-demo

  delete library:
  pnpm remove @filippsm/ui-kit-mypixelgram-demo
  ```

* If you don't specify styles, rendering of imported components won't work, since Tailwind doesn't build, but only substitutes class names.

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
    --font-weight-semiBold: 600;
    --font-weight-bold: 700;
  }

  global.css:
  @layer base {
    input[type='search']::-webkit-search-cancel-button {
        cursor: pointer;
        visibility: visible;
        filter: brightness(0) invert(1);
    }

    input:-webkit-autofill {
        box-shadow: 0 0 0 0 transparent inset;
        caret-color: var(--color-light-100);
        transition: background-color 5000s ease-in-out 0s;

        -webkit-text-fill-color: var(--color-light-900);
    }

    input:-webkit-autofill:focus {
        -webkit-text-fill-color: var(--color-light-100);
    }

    html {
        line-height: var(--line-height-m);
        color: var(--color-light-100);
        background-color: var(--color-dark-700);
    }
   }

   @layer utilities {
      .scrollbar-custom::-webkit-scrollbar {
         width: 6px;
      }

      .scrollbar-custom::-webkit-scrollbar-track {
         background: var(--color-dark-300);
         border-radius: 2px;
      }

      .scrollbar-custom::-webkit-scrollbar-thumb {
         background-color: var(--color-dark-100);
         border-radius: 2px;
      }
   }

   body {
      font-family: Inter, system-ui, sans-serif;
   }

  tailwind.config.ts:
  const config: Config = {
   content: ['./src/app/**/*.{ts,tsx,js,jsx}', './src/components/**/*.{ts,tsx,js,jsx}', './node_modules/@filippsm/ui-kit-mypixelgram-demo/*/.{js,ts,jsx,tsx}'],
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

- Export сomponents/icons:
  ```
   export {
      $2 as AddIcon,
      x2 as Alert,
      M2 as ArrowBackIcon,
      x0 as ArrowDownIcon,
      y2 as ArrowForwardIcon,
      V1 as ArrowLeftIcon,
      P1 as ArrowRightIcon,
      b2 as ArrowUpIcon,
      B9 as Avatar,
      x9 as BraveIcon,
      _1 as Button,
      v0 as CalendarIcon,
      b0 as CalendarOutlineIcon,
      H9 as Card,
      k2 as CheckedCheckboxIcon,
      v9 as ChromeIcon,
      m0 as CloseAlertIcon,
      p9 as CloseLock,
      J2 as CopyIcon,
      Z2 as CreateIcon,
      R2 as CreateOutlineIcon,
      A1 as CrossIcon,
      N9 as DatePicker,
      i9 as DeleteVoiceIcon,
      w9 as DesktopIcon,
      S9 as DropDownMenu,
      O9 as DropDownMenuArrow,
      I9 as DropDownMenuItem,
      A0 as DropDownMenuLabel,
      D9 as DropDownMenuTrigger,
      A9 as DropDownSeparator,
      l9 as EditIcon,
      s9 as ExpandOutline,
      b9 as ExplorerIcon,
      V2 as FavoriteIcon,
      B2 as FavoriteOutlineIcon,
      H2 as FilterIcon,
      y9 as FirefoxIcon,
      a9 as FlagRussiaIcon,
      C9 as FlagUKIcon,
      q2 as FollowIcon,
      N2 as GitHubIcon,
      S2 as GoogleIcon,
      I2 as HomeIcon,
      A2 as HomeOutlineIcon,
      h9 as ImageOutline,
      P9 as Input,
      L9 as IphoneIcon,
      B1 as Label,
      U2 as LikeIcon,
      K2 as LikeOutlineIcon,
      z9 as Loader,
      D2 as LogoutIcon,
      d9 as Maximize,
      c9 as MaximizeOutline,
      O2 as MessageIcon,
      P2 as MessageOutlineIcon,
      e9 as MicroIcon,
      M9 as MicrosoftEdge,
      P0 as Modal,
      O0 as ModalBody,
      K1 as ModalClose,
      N1 as ModalTitle,
      Q2 as MoreIcon,
      z2 as NotificationIcon,
      k9 as OperaIcon,
      j9 as Pagination,
      m9 as PaidIcon,
      t9 as PauseVoiceIcon,
      f9 as PayPalIcon,
      T2 as PaymentIcon,
      F2 as PaymentOutlineIcon,
      j2 as PersonIcon,
      E2 as PersonOutlineIcon,
      H0 as PinLocation,
      r9 as PlayVoiceIcon,
      u9 as PlusCircleOutline,
      _2 as PostIcon,
      E9 as PostModal,
      y0 as PostOutlineIcon,
      _9 as RadioGroup,
      G9 as RadioItem,
      X9 as RangeControl,
      G2 as ReCaptchaIcon,
      o9 as RecaptchaSuccessIcon,
      Z9 as SafariIcon,
      K9 as Scroll,
      k0 as SearchIcon,
      z0 as Select,
      j0 as SelectContent,
      T9 as SelectGroup,
      E0 as SelectItem,
      F9 as SelectLabel,
      F0 as SelectTrigger,
      T0 as SelectValue,
      W2 as ShareIcon,
      U9 as Slider,
      X2 as StatisticIcon,
      g9 as StripeIcon,
      r2 as Table,
      l2 as TableBody,
      n2 as TableCell,
      i2 as TableHead,
      a2 as TableHeadCell,
      o2 as TableRow,
      C2 as Tabs,
      s2 as TabsContent,
      c2 as TabsList,
      d2 as TabsTrigger,
      Q9 as Textarea,
      W9 as Toast,
      n9 as TrashIcon,
      h1 as Typography,
      R9 as UcBrowserIcon,
      Y2 as UnfollowIcon,
      Z0 as VisibilityIcon,
      R0 as VisibilityOffIcon,
      N0 as VolumeIcon,
      S0 as VolumeMuteIcon,
      V9 as YandexIcon,
      v2 as alert,
      X1 as variantClasses
   };
  ```
