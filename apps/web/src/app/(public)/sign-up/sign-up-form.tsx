'use client'

import type React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { useFormState } from '@/hooks/use-form-state'
import { signUpAction } from './actions'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertTriangle, Loader2 } from 'lucide-react'
import Link from 'next/link'

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const router = useRouter()

  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    signUpAction,
    () => {
      router.push('/sign-in')
    },
  )

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Fill in the fields below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {success === false && message && (
              <Alert variant="destructive">
                <AlertTriangle className="size-4" />
                <AlertTitle>Sign up failed!</AlertTitle>
                <AlertDescription>
                  <p>{message}</p>
                </AlertDescription>
              </Alert>
            )}

            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
                {errors?.name && (
                  <p className="text-xs font-medium text-red-500 dark:text-red-400">
                    {errors.name[0]}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />

                {errors?.email && (
                  <p className="text-xs font-medium text-red-500 dark:text-red-400">
                    {errors.email[0]}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input name="password" type="password" id="password" required />

                {errors?.password && (
                  <p className="text-xs font-medium text-red-500 dark:text-red-400">
                    {errors.password[0]}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password_confirmation">
                  Confirm your password
                </Label>
                <Input
                  name="password_confirmation"
                  id="password_confirmation"
                  type="password"
                  required
                />

                {errors?.password_confirmation && (
                  <p className="text-xs font-medium text-red-500 dark:text-red-400">
                    {errors.password_confirmation[0]}
                  </p>
                )}
              </div>

              <Button className="w-full" type="submit" disabled={isPending}>
                {isPending && <Loader2 className="size-4 animate-spin" />}
                {!isPending && 'Create account'}
              </Button>
            </div>

            <div className="mt-4 text-center text-sm">
              Already registered?{' '}
              <Link href="/sign-in" className="underline underline-offset-4">
                Sign In
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
