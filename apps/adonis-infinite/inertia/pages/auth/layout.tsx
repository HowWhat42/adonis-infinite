import { client } from '@iflab/rpc/client'
import { Link } from '@tuyau/inertia/react'

const Layout = ({children}: {children: React.ReactNode}) => {
  const pathname = client.$current()
  return (
    <>
      <section className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="flex justify-end gap-4 absolute right-1/2 lg:right-1/4 translate-x-1/2 top-4 md:top-8 max-w-[484px] w-[calc(50%+64px)]">
          {pathname === "/signin" && (
            <Link
              route="auth.signup"
            >
              {("signup.title")}
            </Link>
          )}
          {(pathname === "auth.signup" ||
            pathname === "auth.change-password" ||
            pathname === "auth.forgot-password") && (
            <Link
              route="auth.signin"
            >
              {("signin.title")}
            </Link>
          )}
          {/* <LanguageSwitcher /> */}
        </div>
        <aside className="relative hidden h-full flex-col bg-layout-foreground p-10 text-white lg:flex dark:border-r">
          <div className="absolute flex items-center inset-0 bg-zinc-900 overflow-hidden">
            <img
              alt="Neon city"
              loading='lazy'
              className="after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-zinc-900 after:opacity-75"
              src={"https://images.pexels.com/photos/1083807/pexels-photo-1083807.jpeg"}
            />
          </div>
          <nav className="relative z-20">
            {/* <Link to="/" className="flex items-center text-lg font-medium">
              <Brand className="w-10 h-10 min-w-10 mr-2" />
              Boilerplate
            </Link> */}
          </nav>
          <footer className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </footer>
        </aside>
        <article className="lg:p-8">
          {children}
        </article>
      </section>
      {/* <Footer /> */}
    </>
  )
}

export default Layout