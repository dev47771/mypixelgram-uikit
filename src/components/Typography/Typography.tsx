import { ComponentPropsWithRef, ElementType, ReactNode } from 'react'
import { TypographyVariant } from '@/lib'
import { clsx } from 'clsx'
import { resolveTypographyTag } from './resolveTag'
import { variantClasses } from './variantClasses'

export type TypographyProps<T extends ElementType> = {
   as?: T
   children?: ReactNode
   className?: string
   variant?: TypographyVariant
} & ComponentPropsWithRef<T>

export const Typography = <T extends ElementType = 'p'>({
   as,
   children,
   className,
   variant = 'bodyRegular',
   ...rest
}: TypographyProps<T>) => {
   const Component = resolveTypographyTag(as, variant)
   const mergedClass =
      variant in variantClasses
         ? clsx(variantClasses[variant as TypographyVariant], className)
         : className

   return (
      <Component className={mergedClass} {...rest}>
         {children}
      </Component>
   )
}
