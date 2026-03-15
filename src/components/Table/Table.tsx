import { cn } from '@/lib'
import type { ComponentPropsWithRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Table = ({ className, ...rest }: ComponentPropsWithRef<'table'>) => {
   return (
      <table
         className={cn(
            'bg-dark-700 text-light-100 border-dark-500 w-full rounded border',
            className
         )}
         {...rest}
      />
   )
}
Table.displayName = 'Table'

const TableHead = ({ className, ...rest }: ComponentPropsWithRef<'thead'>) => {
   return <thead className={cn('bg-dark-500 text-light-100', className)} {...rest} />
}
TableHead.displayName = 'TableHead'

const TableBody = ({ ...rest }: ComponentPropsWithRef<'tbody'>) => {
   return <tbody {...rest} />
}
TableBody.displayName = 'TableBody'

const TableCell = ({ className, ...rest }: ComponentPropsWithRef<'td'>) => {
   return (
      <td
         className={twMerge(
            cn(
               'border-dark-500 font-regular leading-m text-s h-full border-b-1 px-4 py-6',
               className
            )
         )}
         {...rest}
      />
   )
}
TableCell.displayName = 'TableCell'

const TableRow = ({ ...rest }: ComponentPropsWithRef<'tr'>) => {
   return <tr {...rest} />
}
TableRow.displayName = 'TableRow'

const TableHeadCell = ({ className, ...rest }: ComponentPropsWithRef<'th'>) => {
   return (
      <th
         className={twMerge(cn('leading-m text-s px-4 py-6 text-left font-semibold', className))}
         {...rest}
      />
   )
}
TableHeadCell.displayName = 'TableHeadCell'

export { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow }

