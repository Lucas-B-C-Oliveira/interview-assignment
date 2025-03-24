import { NextResponse, type NextRequest } from 'next/server'

const publicRoutes = [
  { path: '/sign-in', whenAuthenticated: 'redirect' },
  { path: '/sign-up', whenAuthenticated: 'redirect' },
  { path: '/', whenAuthenticated: 'next' },
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/sign-in'

export function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname
  const publicRoute = publicRoutes.find((route) => route.path === currentPath)
  const authToken = request.cookies.get('token')

  const NOT_AUTHENTICATED = !authToken
  const AUTHENTICATED = authToken
  const MUST_REDIRECT_IN_PUBLIC_ROUTES =
    publicRoute?.whenAuthenticated === 'redirect'

  const IT_IS_ON_PRIVATE_ROUTE = !publicRoute
  const IT_IS_ON_PUBLIC_ROUTE = publicRoute

  const redirectUrl = request.nextUrl.clone()

  if (NOT_AUTHENTICATED && IT_IS_ON_PUBLIC_ROUTE) {
    return NextResponse.next()
  }

  if (NOT_AUTHENTICATED && IT_IS_ON_PRIVATE_ROUTE) {
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE

    return NextResponse.redirect(redirectUrl)
  }

  if (
    AUTHENTICATED &&
    IT_IS_ON_PUBLIC_ROUTE &&
    MUST_REDIRECT_IN_PUBLIC_ROUTES
  ) {
    redirectUrl.pathname = '/'

    return NextResponse.redirect(redirectUrl)
  }

  if (AUTHENTICATED && IT_IS_ON_PRIVATE_ROUTE) {
    try {
      const base64Url = authToken?.value?.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const decodedToken = JSON.parse(decodeURIComponent(escape(atob(base64))))

      const expirationTime = decodedToken.exp * 1000

      if (Date.now() > expirationTime) {
        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE
        const response = NextResponse.redirect(redirectUrl)
        response.cookies.delete('token')
        return response
      }
    } catch (error) {
      redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE
      const response = NextResponse.redirect(redirectUrl)
      response.cookies.delete('token')
      return response
    }

    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
