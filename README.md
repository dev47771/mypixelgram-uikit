# Usage:
- Summary:
  ```
  установить локально:
  pnpm build
  pnpm pack (сгенериуется либа filippsm-ui-kit-mypixelgram-demo-1.0.1.tgz)
  pnpm add ../filippsm-ui-kit-mypixelgram-demo-1.0.1.tgz (версия будет в названии актуальная на момент билда)

  запустить локально (запускается storybook):
  pnpm dev

  установить пакет npm в проект:
  pnpm add @filippsm/ui-kit-mypixelgram-demo

  в проект в tailwind.config.ts обязательно добавить './node_modules/@filippsm/ui-kit-mypixelgram-demo/*/.{js,ts,jsx,tsx}':
  content: ['./src/app/**/*.{ts,tsx,js,jsx}', './src/components/**/*.{ts,tsx,js,jsx}', './node_modules/@filippsm/ui-kit-mypixelgram-demo/*/.{js,ts,jsx,tsx}'],

  в проект обязательно добавить: colors.css, typography.css и в tailwind.config.ts добавить кастомные переменные:
  так как ui-kit на tailwind в билд передает только наименования классов, без стилей
  если генерировать стили идет конфликт tailwind от ui-kit и проекта

  может появляться ошибка для glob@10.5.0:
  это неактульная версия у зависимой библиотеки сторибука

  ci/cd:
  через github actions при пуше в ветку main - идет пуш в npm

  если делать пуш в npm не автоматически, а в ручную:
  pnpm build
  pnpm publish --access public
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
   J2 as AddIcon,
   L2 as Alert,
   v2 as ArrowBackIcon,
   h0 as ArrowDownIcon,
   x2 as ArrowForwardIcon,
   f1 as ArrowLeftIcon,
   y1 as ArrowRightIcon,
   m2 as ArrowUpIcon,
   k9 as Avatar,
   p9 as BraveIcon,
   H1 as Button,
   u0 as CalendarIcon,
   f0 as CalendarOutlineIcon,
   Z9 as Card,
   b2 as CheckedCheckboxIcon,
   w9 as ChromeIcon,
   s0 as CloseAlertIcon,
   h9 as CloseLock,
   K2 as CopyIcon,
   y2 as CreateIcon,
   M2 as CreateOutlineIcon,
   x1 as CrossIcon,
   R9 as DatePicker,
   $2 as DeleteVoiceIcon,
   u9 as DesktopIcon,
   V9 as DropDownMenu,
   B9 as DropDownMenuItem,
   Z0 as DropDownMenuLabel,
   H9 as DropDownSeparator,
   e9 as EditIcon,
   a9 as ExpandOutline,
   L9 as ExplorerIcon,
   k2 as FavoriteIcon,
   Z2 as FavoriteOutlineIcon,
   m9 as FirefoxIcon,
   i9 as FlagRussiaIcon,
   l9 as FlagUKIcon,
   U2 as FollowIcon,
   R2 as GitHubIcon,
   V2 as GoogleIcon,
   B2 as HomeIcon,
   H2 as HomeOutlineIcon,
   C9 as ImageOutline,
   N9 as Input,
   f9 as IphoneIcon,
   g1 as Label,
   E2 as LikeIcon,
   _2 as LikeOutlineIcon,
   S9 as Loader,
   N2 as LogoutIcon,
   o9 as Maximize,
   n9 as MaximizeOutline,
   S2 as MessageIcon,
   I2 as MessageOutlineIcon,
   W2 as MicroIcon,
   x9 as MicrosoftEdge,
   B0 as Modal,
   V0 as ModalBody,
   I1 as ModalClose,
   w1 as ModalTitle,
   G2 as MoreIcon,
   A2 as NotificationIcon,
   v9 as OperaIcon,
   D9 as Pagination,
   g9 as PaidIcon,
   q2 as PauseVoiceIcon,
   d9 as PayPalIcon,
   D2 as PaymentIcon,
   O2 as PaymentOutlineIcon,
   P2 as PersonIcon,
   z2 as PersonOutlineIcon,
   b0 as PinLocation,
   Y2 as PlayVoiceIcon,
   c9 as PlusCircleOutline,
   T2 as PostIcon,
   O9 as PostModal,
   g0 as PostOutlineIcon,
   P9 as RadioGroup,
   z9 as RadioItem,
   T9 as RangeControl,
   F2 as ReCaptchaIcon,
   r9 as RecaptchaSuccessIcon,
   b9 as SafariIcon,
   F9 as Scroll,
   w0 as SearchIcon,
   H0 as Select,
   I0 as SelectContent,
   I9 as SelectGroup,
   A0 as SelectItem,
   A9 as SelectLabel,
   S0 as SelectTrigger,
   N0 as SelectValue,
   X2 as ShareIcon,
   j9 as Slider,
   j2 as StatisticIcon,
   s9 as StripeIcon,
   e2 as Table,
   r2 as TableBody,
   i2 as TableCell,
   t2 as TableHead,
   n2 as TableHeadCell,
   l2 as TableRow,
   o2 as Tabs,
   c2 as TabsContent,
   a2 as TabsList,
   C2 as TabsTrigger,
   _9 as Textarea,
   E9 as Toast,
   t9 as TrashIcon,
   J as Typography,
   y9 as UcBrowserIcon,
   Q2 as UnfollowIcon,
   L0 as VisibilityIcon,
   m0 as VisibilityOffIcon,
   y0 as VolumeIcon,
   M0 as VolumeMuteIcon,
   M9 as YandexIcon
   };
  ```
