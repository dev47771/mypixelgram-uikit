
import { PaginationLink, getSearchParams } from './PaginationLink'
import {
   PaginationSelect,
   SelectOptionsType,
} from './PaginationSelect'

import { ArrowLeftIcon, ArrowRightIcon } from '@/icons'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { DOTS, usePagination } from './usePagination'

type Props = {
   className?: string
   currentPage: number
   onChangePage: (page: number) => void
   onPageSizeChange: (item: string) => void
   selectOptions: readonly SelectOptionsType[]
   pageSize: number
   siblingCount?: number
   totalCount: number
   /** Текущие query-параметры (строка или URLSearchParams). Если не переданы — берутся из window.location.search */
   searchParams?: URLSearchParams | string | null
}

export const Pagination = ({
   className,
   currentPage,
   onChangePage,
   onPageSizeChange,
   selectOptions,
   pageSize,
   siblingCount = 1,
   totalCount,
   searchParams: searchParamsProp,
}: Props) => {
   const searchParams = getSearchParams(searchParamsProp)

   const paginationRange = usePagination({
      currentPage,
      pageSize,
      siblingCount,
      totalCount,
   })

   /*  if (paginationRange.length < 2) {
      return null
   } */

   const onNextHandler = () => {
      if (currentPage < Number(paginationRange[paginationRange.length - 1])) {
         onChangePage(currentPage + 1)
      }
   }

   const onPreviousHandler = () => {
      if (currentPage > 1) {
         onChangePage(currentPage - 1)
      }
   }

   const changePageHandler = (pageNumber: number) => () => onChangePage(pageNumber)

   const isFirstPage = currentPage === 1
   const isLastPage = currentPage === paginationRange[paginationRange.length - 1]

   return (
      <div className={twMerge(clsx('text-s m-[5px] flex items-center gap-3', className))}>
         <div className={'flex items-center gap-3'}>
            {paginationRange.length < 2 ? null : (
               <>
                  <PaginationLink
                     direction={'prev'}
                     disabled={isFirstPage}
                     onClick={onPreviousHandler}
                     searchParams={searchParams}
                  >
                     <ArrowLeftIcon width={16} height={16} />
                  </PaginationLink>

                  {paginationRange.map((page, i) => {
                     // If the pageItem is a DOT, render the DOTS unicode character

                     if (page === DOTS) {
                        return (
                           <span className={'cursor-default'} key={i}>
                              &#8230;
                           </span>
                        )
                     }

                     const newSearchParams = new URLSearchParams(searchParams.toString())
                     if (Number(page) === 1) {
                        newSearchParams.delete('page')
                     } else {
                        newSearchParams.set('page', page.toString())
                     }
                     const isActiveLink = page === currentPage
                     // Render our Page Pills
                     return (
                        <a
                           key={i}
                           href={`?${newSearchParams.toString()}`}
                           className={twMerge(
                              clsx(
                                 'text-light-100 hover:bg-dark-500 rounded-xs px-2',
                                 'focus-visible:outline-accent-700 focus-visible:outline-2',
                                 isActiveLink && 'text-dark-900 bg-light-100 hover:bg-light-500'
                              )
                           )}
                           tabIndex={isActiveLink ? -1 : 1}
                           onClick={changePageHandler(page)}
                        >
                           {page}
                        </a>
                     )
                  })}

                  <PaginationLink
                     direction={'next'}
                     disabled={isLastPage}
                     onClick={onNextHandler}
                     searchParams={searchParams}
                  >
                     <ArrowRightIcon width={16} height={16} />
                  </PaginationLink>
               </>
            )}

            <div className={'text-s flex items-center gap-2.5 whitespace-nowrap'}>
               Show
               <PaginationSelect
                  selectOptions={selectOptions}
                  onPageSizeChange={onPageSizeChange}
                  defaultValue={pageSize.toString()}
               />
               on page
            </div>
         </div>
      </div>
   )
}
