import { Button } from '@iflab/design-system/button'
import { Field } from '@iflab/design-system/field'
import { Link } from '@tuyau/inertia/react'
import { useTranslation } from 'react-i18next'
import Layout from './layout'
import { useForm } from '@inertiajs/react'

const ForgotPassword = () => {
  const { t } = useTranslation('auth')

  const form = useForm({
    email: '',
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // form.post(loginUrl);
  }

  return (
    <div className="mx-auto flex w-full max-w-[420px] flex-col justify-center space-y-6">
      <header className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{t('forgot.title')}</h1>
        <p className="text-muted-foreground text-sm">{t('forgot.description')}</p>
      </header>
      <main className="grid gap-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
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
          <Button className="mt-3">{t('forgot.confirm')}</Button>
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

ForgotPassword.layout = (page: React.ReactNode) => <Layout>{page}</Layout>

export default ForgotPassword
