'use client'

import Link from 'next/link'
import { Github } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { buttonVariants } from '~/components/ui/button'
import { cn } from '~/lib/utils'
import { siteConfig } from '~/config/site'
import { ThemeSelector } from '~/components/theme-selector'

export function LayoutHeader() {
  const pathname = usePathname()

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* <Icons.logo className="h-6 w-6" /> */}
            <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
          </Link>

          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/servers"
              data-actual={pathname === '/servers'}
              className="text-foreground/60 transition-colors hover:text-foreground/80 data-[actual=true]:text-foreground"
            >
              Servers
            </Link>

            <Link
              href="/weapons"
              data-actual={pathname === '/weapons'}
              className="text-foreground/60 transition-colors hover:text-foreground/80 data-[actual=true]:text-foreground"
            >
              Weapons
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <ThemeSelector />
          </nav>
        </div>
      </div>
      <nav></nav>
    </header>
  )
}
