import { clsx } from 'clsx'
import { ReactNode } from 'react'

type Direction = 'prev' | 'next'

export function getSearchParams(searchParams?: URLSearchParams | string | null): URLSearchParams {
   if (searchParams instanceof URLSearchParams) return searchParams
   if (typeof searchParams === 'string') return new URLSearchParams(searchParams)
   if (typeof window !== 'undefined') return new URLSearchParams(window.location.search)
   return new URLSearchParams()
}

type Props = {
   direction: Direction
   disabled?: boolean
   onClick?: () => void
   children: ReactNode
   /** Текущие query-параметры (строка или URLSearchParams). Если не переданы — берутся из window.location.search */
   searchParams?: URLSearchParams | string | null
}

export const PaginationLink = ({
   direction,
   disabled,
   onClick,
   children,
   searchParams: searchParamsProp,
}: Props) => {
   const searchParams = getSearchParams(searchParamsProp)

   const parsed = Number(searchParams.get('page'))
   const currentPage = parsed && parsed > 0 ? parsed : 1

   const prevPage = currentPage > 1 ? currentPage - 1 : 1
   const targetPage = direction === 'prev' ? prevPage : currentPage + 1

   const newSearchParams = new URLSearchParams(searchParams.toString())

   if (targetPage === 1) {
      newSearchParams.delete('page')
   } else {
      newSearchParams.set('page', targetPage.toString())
   }

   return (
      <a
         href={`?${newSearchParams.toString()}`}
         className={clsx(
            'focus-visible:outline-accent-700 focus-visible:outline-2',
            disabled && 'text-dark-100 pointer-events-none cursor-not-allowed'
         )}
         onClick={onClick}
         tabIndex={disabled ? -1 : 1}
      >
         {children}
      </a>
   )
}
