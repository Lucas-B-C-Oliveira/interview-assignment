'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import { cva } from 'class-variance-authority'

export const navLinkVariants = cva('text-sm font-medium', {
  variants: {
    isActive: {
      true: '',
      false: 'text-muted-foreground hover:text-foreground',
    },
  },
  defaultVariants: {
    isActive: false,
  },
})

type NavLinkProps = ComponentProps<typeof Link> & {
  className?: string
}

export function NavLink({ className, ...props }: NavLinkProps) {
  const pathname = usePathname()
  const isCurrent = props.href.toString() === pathname

  return (
    <Link
      {...props}
      className={cn(navLinkVariants({ isActive: isCurrent }), className)}
    />
  )
}
