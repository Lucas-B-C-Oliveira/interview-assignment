'use server'

import { cookies } from 'next/headers'
import { TokenValidator } from '@/lib/auth/token-validator'
import { JoseTokenAdapter } from '@/lib/auth/adapters/jose-token-adapter'
import { env } from '@assignment/env'
import { SignOutAction } from './sign-out-action'

const JWT_SECRET = env.JWT_SECRET
const JWT_ISSUER = env.JWT_ISSUER
const JWT_AUDIENCE = env.JWT_AUDIENCE

export async function getAuthDataAction() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  if (!token) {
    return { isAuthenticated: false, userId: null }
  }

  const joseAdapter = new JoseTokenAdapter(JWT_SECRET, JWT_ISSUER, JWT_AUDIENCE)

  const tokenValidator = new TokenValidator(joseAdapter)

  const { isValid, payload } = await tokenValidator.validateToken(token)

  if (!isValid) await SignOutAction()

  if (isValid && payload) {
    return { isAuthenticated: true, userId: payload.userId as number }
  } else {
    return { isAuthenticated: false, userId: null }
  }
}
