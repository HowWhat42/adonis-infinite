import { Link } from '@tuyau/inertia/react'
import Layout from './layout'
import { Field } from '@iflab/design-system/field'
import { Button } from '@iflab/design-system/button'
import { useTranslation } from 'react-i18next'
import { useForm } from '@inertiajs/react'
import { client } from '@iflab/rpc/client'

const Signup = () => {
  const { t } = useTranslation('auth')
  const registerUrl = client.$url('auth.login')

  const form = useForm({
    email: '',
    password: '',
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post(registerUrl)
  }

  return (
    <div className="mx-auto flex w-full max-w-[420px] flex-col justify-center space-y-6">
      <header className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{t('signup.title')}</h1>
        <p className="text-muted-foreground text-sm">{t('signup.description')}</p>
      </header>
      <main className="grid gap-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-muted-foreground px-2">{t('or_continue')}</span>
          </div>
        </div>
        <form method="post" onSubmit={onSubmit} className="flex flex-col">
          <Field
            placeholder={'name@example.com'}
            type="email"
            label={t('fields.email')}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            value={form.data.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              form.setData('email', e.target.value)
            }
            errorMessage={form.errors.email}
          />
          <Field
            placeholder="••••••••••••"
            type="password"
            label={t('fields.password')}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect="off"
            value={form.data.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              form.setData('password', e.target.value)
            }
            errorMessage={form.errors.password}
          />
          <Button className="mt-3">{t('signup.action')}</Button>
        </form>
      </main>
      <footer>
        <p className="text-muted-foreground -mb-10 mt-10 px-8 text-center text-sm">
          {t('agree')}{' '}
          <Link route="terms" className="variant underline-offset-4">
            {t('terms')}
          </Link>{' '}
          {t('and')}{' '}
          <Link route="privacy" className="variant underline-offset-4">
            {t('privacy')}
          </Link>
          .
        </p>
      </footer>
    </div>
  )
}

Signup.layout = (page: React.ReactNode) => <Layout>{page}</Layout>

export default Signup
