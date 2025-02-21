import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
// import { useSearchParams } from 'next/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'zh'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});

export type Locale = (typeof routing.locales)[number];
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);

export const useChangeLng = () => {
  const router = useRouter();
  const pathname = usePathname();

  const changeLang = (locale: string, searchParams?: string) => {
    router.replace(`${pathname}${searchParams ? '?' + searchParams : ''}`, {
      locale
    });
  }

  return {
    pathname,
    changeLang
  }
}

