'use client'

import { SignOutAction } from '@/actions/sign-out-action'
import { useTransition } from 'react'
import { Loader2 } from 'lucide-react'

type SignOutButtonProps = React.ComponentProps<'button'>

export function SignOutButton({ children, ...props }: SignOutButtonProps) {
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(async () => {
      await SignOutAction()
    })
  }

  return (
    <button {...props} onClick={handleClick} disabled={isPending}>
      {isPending && <Loader2 className="size-4 animate-spin" />}
      {!isPending && <>{children}</>}
    </button>
  )
}
