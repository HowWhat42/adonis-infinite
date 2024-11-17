import { defineConfig } from '@adonisjs/auth'
import { sessionGuard } from '@adonisjs/auth/session'
import type { InferAuthEvents, Authenticators } from '@adonisjs/auth/types'
import { configProvider } from '@adonisjs/core';

const authConfig = defineConfig({
  default: 'web',
  guards: {
    web: sessionGuard({
      useRememberMeTokens: false,
      provider: configProvider.create(async () => {
				const { SessionKyselyUserProvider } = await import('#providers/session_user_provider');
				return new SessionKyselyUserProvider();
			}),
    }),
  },
})

export default authConfig

/**
 * Inferring types from the configured auth
 * guards.
 */
declare module '@adonisjs/auth/types' {
  export interface Authenticators extends InferAuthenticators<typeof authConfig> {}
}
declare module '@adonisjs/core/types' {
  interface EventsList extends InferAuthEvents<Authenticators> {}
}