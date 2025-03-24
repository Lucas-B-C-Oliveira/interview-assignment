import { getAuthDataAction } from '@/actions/get-auth-data-action'
import { NavLink } from '@/components/header/nav-link'
import { Logo } from '@/components/header/logo'
import { UserDropdownMenu } from '@/components/header/user/user-dropdown-menu'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ThemeSwitcher } from './theme-switcher'

export async function Header() {
  const { isAuthenticated } = await getAuthDataAction()

  return (
    <header className="sticky top-0 z-10 border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Logo />

          <div className="flex items-center gap-4 lg:gap-6">
            <nav className="hidden md:flex items-center gap-6">
              {isAuthenticated && (
                <NavLink href={'/dashboard'}>Dashboard</NavLink>
              )}
              <NavLink href={'/'}>Home</NavLink>
            </nav>
          </div>
        </div>

        <>
          {!isAuthenticated && (
            <div className="flex flex-row items-center gap-4">
              <Link href="/sign-in">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button>Sign Up</Button>
              </Link>
              <ThemeSwitcher />
            </div>
          )}

          {isAuthenticated && (
            <div className="flex flex-row items-center gap-4 ">
              <UserDropdownMenu />
              <ThemeSwitcher />
            </div>
          )}
        </>
      </div>
    </header>
  )
}
