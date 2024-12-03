import { Field } from '@iflab/design-system/field'
import { Button } from '@iflab/design-system/button'
import { Checkbox } from '@iflab/design-system/checkbox'
import { useForm, usePage } from '@inertiajs/react'
import { client } from '@iflab/rpc/client'
import Layout from './layout'
import { useTranslation } from 'react-i18next'
import { Link } from '@tuyau/inertia/react'

const Signin = () => {
  const { t } = useTranslation('auth')
  const loginUrl = client.$url('auth.login')
  const errors = usePage().props.errors

  const form = useForm({
    email: '',
    password: '',
    remember: false,
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post(loginUrl)
  }

  return (
    <div className="mx-auto flex w-full max-w-[420px] flex-col justify-center space-y-6">
      <header className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{t('signin.title')}</h1>
        <p className="text-muted-foreground text-sm">{t('signin.description')}</p>
      </header>
      <main className="grid gap-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-layout-elevation text-muted-foreground px-2">
              {t('or_continue')}
            </span>
          </div>
        </div>
        <form onSubmit={onSubmit} method="post" className="flex flex-col">
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
          <Checkbox
            label={'Remember me'}
            checked={form.data.remember}
            onCheckedChange={(e) => form.setData('remember', e.checked as boolean)}
          />
          <Button className="mt-3">{t('signin.action')}</Button>
          <Link route="auth.forgot_password" className="mt-2 self-end text-right text-sm">
            {t('forgot.link')}
          </Link>
        </form>
      </main>
      <footer>
        <p className="text-muted-foreground -mb-10 mt-10 px-8 text-center text-sm">
          {t('agree')}{' '}
          <Link route="terms" className="variant underline-offset-4 hover:underline">
            {t('terms')}
          </Link>{' '}
          {t('and')}{' '}
          <Link route="privacy" className="variant underline-offset-4 hover:underline">
            {t('privacy')}
          </Link>
          .
        </p>
      </footer>
    </div>
  )
}

Signin.layout = (page: React.ReactNode) => <Layout>{page}</Layout>

export default Signin
