import { getCookie as getCookieClientSide } from 'cookies-next/client'

import { getCookie as getCookieServerSide } from 'cookies-next/server'
import { cookies as serverCookies } from 'next/headers'

export async function getToken() {
  if (typeof window === 'undefined') {
    // Server-side
    const cookieStore = async () => serverCookies()
    const token = getCookieServerSide('token', { cookies: cookieStore })
    return token
  } else {
    // Client-side
    const token = getCookieClientSide('token')
    return token
  }
}
