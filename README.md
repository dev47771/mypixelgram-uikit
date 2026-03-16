# Usage:
- Short:
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

    /* stylelint-disable-next-line */
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

- Components/icons/libs:
  ```
  +---components
    |   |   index.ts
    |   |
    |   +---Alert
    |   |       Alert.stories.tsx
    |   |       Alert.tsx
    |   |       index.tsx
    |   |
    |   +---Avatar
    |   |       Avatar.stories.tsx
    |   |       Avatar.tsx
    |   |       index.ts
    |   |       logo-light.png
    |   |
    |   +---Button
    |   |       Button.stories.tsx
    |   |       Button.tsx
    |   |       index.ts
    |   |
    |   +---Card
    |   |       Card.stories.tsx
    |   |       Card.tsx
    |   |       index.ts
    |   |
    |   +---Checkbox
    |   |       Checkbox.stories.tsx
    |   |       Checkbox.tsx
    |   |       index.ts
    |   |       RecaptchaSpinner.tsx
    |   |
    |   +---DatePicker
    |   |   |   DatePicker.stories.tsx
    |   |   |   DatePicker.tsx
    |   |   |   index.tsx
    |   |   |
    |   |   \---styles
    |   |           datePicker.css
    |   |
    |   +---DropDownMenu
    |   |   |   DropDownMenu.stories.tsx
    |   |   |   DropDownMenu.tsx
    |   |   |   index.ts
    |   |   |
    |   |   +---DropDownMenuArrow
    |   |   |       DropDownMenuArrow.tsx
    |   |   |       index.ts
    |   |   |
    |   |   +---DropDownMenuItem
    |   |   |       DropDownMenuItem.tsx
    |   |   |       index.ts
    |   |   |
    |   |   +---DropDownMenuLabel
    |   |   |       DropDownMenuLabel.tsx
    |   |   |       index.ts
    |   |   |
    |   |   +---DropDownMenuTrigger
    |   |   |       DropDownMenuTrigger.tsx
    |   |   |       index.ts
    |   |   |
    |   |   \---DropDownSeparator
    |   |           DropDownSeparator.tsx
    |   |           index.ts
    |   |
    |   +---Input
    |   |       index.ts
    |   |       Input.stories.tsx
    |   |       Input.tsx
    |   |
    |   +---Label
    |   |       index.ts
    |   |       Label.stories.tsx
    |   |       Label.tsx
    |   |
    |   +---Loader
    |   |       index.ts
    |   |       Loader.stories.tsx
    |   |       Loader.tsx
    |   |
    |   +---Modal
    |   |       index.ts
    |   |       Modal.stories.tsx
    |   |       Modal.tsx
    |   |
    |   +---Pagination
    |   |   |   index.ts
    |   |   |   Pagination.stories.tsx
    |   |   |   Pagination.tsx
    |   |   |   usePagination.ts
    |   |   |
    |   |   +---PaginationLink
    |   |   |       index.ts
    |   |   |       PaginationLink.tsx
    |   |   |
    |   |   \---PaginationSelect
    |   |           index.ts
    |   |           PaginationSelect.tsx
    |   |
    |   +---PostModal
    |   |       index.ts
    |   |       PostModal.stories.tsx
    |   |       PostModal.tsx
    |   |
    |   +---Radio-group
    |   |       index.ts
    |   |       Radio-group.stories.tsx
    |   |       Radio-group.tsx
    |   |       RadioItem.tsx
    |   |
    |   +---RangeControl
    |   |   |   index.ts
    |   |   |   RangeControl.stories.tsx
    |   |   |   RangeControl.tsx
    |   |   |
    |   |   +---RangeControlRange
    |   |   |       index.ts
    |   |   |       RangeControlRange.tsx
    |   |   |
    |   |   +---RangeControlRoot
    |   |   |       index.ts
    |   |   |       RangeControlRoot.tsx
    |   |   |
    |   |   +---RangeControlThumb
    |   |   |       index.ts
    |   |   |       RangeControlThumb.tsx
    |   |   |
    |   |   \---RangeControlTrack
    |   |           index.ts
    |   |           RangeControlTrack.tsx
    |   |
    |   +---Scroll
    |   |       index.tsx
    |   |       Scroll.stories.tsx
    |   |       Scroll.tsx
    |   |
    |   +---Select
    |   |       index.ts
    |   |       Select.stories.tsx
    |   |       Select.tsx
    |   |
    |   +---Slider
    |   |   |   index.ts
    |   |   |   Slider.stories.tsx
    |   |   |   Slider.tsx
    |   |   |   useSlider.ts
    |   |   |
    |   |   +---image
    |   |   |       logo-dark.png
    |   |   |       logo-light.png
    |   |   |
    |   |   +---SliderArrow
    |   |   |       index.ts
    |   |   |       SliderArrow.tsx
    |   |   |
    |   |   +---SliderContent
    |   |   |       index.ts
    |   |   |       SliderContent.tsx
    |   |   |
    |   |   +---SliderDots
    |   |   |       index.ts
    |   |   |       SliderDots.tsx
    |   |   |
    |   |   +---SliderRoot
    |   |   |       index.ts
    |   |   |       SliderRoot.tsx
    |   |   |
    |   |   \---SliderSlide
    |   |           index.ts
    |   |           SliderSlide.tsx
    |   |
    |   +---Table
    |   |       index.ts
    |   |       Table.stories.tsx
    |   |       Table.tsx
    |   |
    |   +---Tabs
    |   |       index.ts
    |   |       Tabs.stories.tsx
    |   |       Tabs.tsx
    |   |
    |   +---Textarea
    |   |       index.ts
    |   |       Textarea.stories.tsx
    |   |       Textarea.tsx
    |   |
    |   +---Toast
    |   |       index.ts
    |   |       Toast.stories.tsx
    |   |       Toast.tsx
    |   |
    |   \---Typography
    |           index.ts
    |           resolveTag.ts
    |           Typography.stories.tsx
    |           Typography.tsx
    |           typographyVariants.ts
    |           variantClasses.ts
    |
    +---icons
    |   |   AddIcon.tsx
    |   |   ArrowBackIcon.tsx
    |   |   ArrowDownIcon.tsx
    |   |   ArrowForwardIcon.tsx
    |   |   ArrowLeftIcon.tsx
    |   |   ArrowRightIcon.tsx
    |   |   ArrowUpIcon.tsx
    |   |   CalendarIcon.tsx
    |   |   CalendarOutlineIcon.tsx
    |   |   CheckedCheckboxIcon.tsx
    |   |   CloseAlertIcon.tsx
    |   |   CloseLock.tsx
    |   |   CopyIcon.tsx
    |   |   CreateIcon.tsx
    |   |   CreateOutlineIcon.tsx
    |   |   CrossIcon.tsx
    |   |   DeleteVoiceIcon.tsx
    |   |   DesktopIcon.tsx
    |   |   EditIcon.tsx
    |   |   ExpandOutline.tsx
    |   |   FavoriteIcon.tsx
    |   |   FavoriteOutlineIcon.tsx
    |   |   FlagRussiaIcon.tsx
    |   |   FlagUKIcon.tsx
    |   |   FollowIcon.tsx
    |   |   GitHubIcon.tsx
    |   |   GoogleIcon.tsx
    |   |   HomeIcon.tsx
    |   |   HomeOutlineIcon.tsx
    |   |   ImageOutline.tsx
    |   |   index.ts
    |   |   IphoneIcon.tsx
    |   |   LikeIcon.tsx
    |   |   LikeOutlineIcon.tsx
    |   |   LogoutIcon.tsx
    |   |   Maximize.tsx
    |   |   MaximizeOutline.tsx
    |   |   MessageIcon.tsx
    |   |   MessageOutlineIcon.tsx
    |   |   MicroIcon.tsx
    |   |   MoreIcon.tsx
    |   |   NotificationIcon.tsx
    |   |   PaidIcon.tsx
    |   |   PauseVoiceIcon.tsx
    |   |   PaymentIcon.tsx
    |   |   PaymentOutlineIcon.tsx
    |   |   PayPalIcon.tsx
    |   |   PersonIcon.tsx
    |   |   PersonOutlineIcon.tsx
    |   |   PinLocation.tsx
    |   |   PlayVoiceIcon.tsx
    |   |   PlusCircleOutline.tsx
    |   |   PostIcon.tsx
    |   |   PostOutlineIcon.tsx
    |   |   proicons_volumeMute
    |   |   ReCaptchaIcon.tsx
    |   |   RecaptchaSuccessIcon.tsx
    |   |   SearchIcon.tsx
    |   |   ShareIcon.tsx
    |   |   StatisticIcon.tsx
    |   |   StripeIcon.tsx
    |   |   TrashIcon.tsx
    |   |   UnfollowIcon.tsx
    |   |   VisibilityIcon.tsx
    |   |   VisibilityOffIcon.tsx
    |   |   VolumeIcon.tsx
    |   |   VolumeMuteIcon.tsx
    |   |
    |   +---browsers
    |   |       BraveIcon.tsx
    |   |       ChromeIcon.tsx
    |   |       ExplorerIcon.tsx
    |   |       FirefoxIcon.tsx
    |   |       MicrosoftEdge.tsx
    |   |       OperaIcon.tsx
    |   |       SafariIcon.tsx
    |   |       UcBrowserIcon.tsx
    |   |       YandexIcon.tsx
    |   |
    |   \---stories
    |           Icons.stories.tsx
    |           NotificationIcon.stories.tsx
    |
    +---lib
    |       cn.ts
    |       index.ts
  ```
