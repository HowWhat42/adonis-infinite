import { Field } from '@iflab/design-system/field'
import { Button } from '@iflab/design-system/button'
import { Checkbox } from '@iflab/design-system/checkbox'
import { Link, useForm, usePage } from '@inertiajs/react'
import { client } from '@iflab/rpc/client'
import Layout from './layout'

const Signin = () => {
  const loginUrl = client.$url('auth.login');
  const errors = usePage().props.errors;

  const form = useForm({
    email: '',
    password: '',
    remember: false,
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
		form.post(loginUrl);
	}

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-[420px]">
      <header className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {("signin.title")}
        </h1>
        <p className="text-muted-foreground text-sm">
          {("signin.description")}
        </p>
      </header>
      <main className="grid gap-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-muted-foreground px-2">
              {("or_continue")}
            </span>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          method="post"
          className="flex flex-col"
        >
          <Field
            placeholder={"name@example.com"}
            type="email"
            label={("fields.email")}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            value={form.data.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => form.setData('email', e.target.value)}
            errorMessage={form.errors.email}
          />
          <Field
            placeholder="********"
            type="password"
            label={("fields.password")}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect="off"
            value={form.data.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => form.setData('password', e.target.value)}
            errorMessage={form.errors.password}
          />
          <Checkbox label={"Remember me"} checked={form.data.remember} onCheckedChange={(e) => form.setData('remember', e.checked as boolean)} />
          <Button className="mt-3">{("signin.action")}</Button>
          <Link
            href="/forgot-password"
            className="self-end text-right text-sm mt-2"
          >
            {("forgot.link")}
          </Link>
        </form>
      </main>
      <footer>
        <p className="text-muted-foreground -mb-10 mt-10 px-8 text-center text-sm">
          {("agree")}{" "}
          <Button>
            <Link
              href="/terms"
              className="variant underline-offset-4 hover:underline"
            >
              {("terms")}
            </Link>
          </Button>{" "}
          {("and")}{" "}
          <Button>
            <Link
              href="/privacy"
              className="variant underline-offset-4 hover:underline"
            >
              {("privacy")}
            </Link>
          </Button>
          .
        </p>
      </footer>
    </div>
  )
}

Signin.layout = (page: React.ReactNode) => <Layout children={page} />

export default Signin