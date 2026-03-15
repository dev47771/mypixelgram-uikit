import { cn } from '@/lib'
import { ComponentPropsWithRef, ElementType, ReactNode } from 'react'
import { resolveTypographyTag } from './resolveTag'
import { TypographyVariant } from './typographyVariants'
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
         ? cn(variantClasses[variant as TypographyVariant], 'text-light-100', className)
         : cn('text-light-100', className)

   return (
      <Component className={mergedClass} {...rest}>
         {children}
      </Component>
   )
}
