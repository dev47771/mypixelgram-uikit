import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

export const buttonVariant = ['icon', 'link', 'primary', 'secondary', 'tertiary'] as const

export type ButtonVariant = (typeof buttonVariant)[number]

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

/* const baseClasses =
  '[all:unset] cursor-pointer box-border py-2 px-4 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-lightcoral focus-visible:outline-offset-2' */
const baseClasses =
  'cursor-pointer box-border py-2 px-4 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-lightcoral focus-visible:outline-offset-2'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'text-white bg-blue-600',
  secondary: 'text-black bg-sky-200',
  tertiary: 'text-blue-600 border border-blue-600',
  link: 'text-blue-600 underline',
  icon: 'w-6 h-6',
}

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props


  const classNames = clsx(baseClasses, variantClasses[variant], fullWidth && 'w-full', className)
  /* const classNames = 'text-white bg-blue-600' */

  return <Component className={classNames} {...rest} />
}