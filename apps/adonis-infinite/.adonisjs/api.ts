import type { MakeTuyauRequest, MakeTuyauResponse } from '@tuyau/utils/types'
import type { InferInput } from '@vinejs/vine/types'

type AuthSigninGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['signin']>
}
type AuthLoginPost = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['login']>
}
type AuthSignupGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['signup']>
}
type AuthForgotpasswordGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['forgot_password']>
}
type LogoutDelete = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['logout']>
}
export interface ApiDefinition {
  'auth': {
    'signin': {
      '$url': {
      };
      '$get': AuthSigninGetHead;
      '$head': AuthSigninGetHead;
    };
    'login': {
      '$url': {
      };
      '$post': AuthLoginPost;
    };
    'signup': {
      '$url': {
      };
      '$get': AuthSignupGetHead;
      '$head': AuthSignupGetHead;
    };
    'forgot_password': {
      '$url': {
      };
      '$get': AuthForgotpasswordGetHead;
      '$head': AuthForgotpasswordGetHead;
    };
  };
  'logout': {
    '$url': {
    };
    '$delete': LogoutDelete;
  };
}
const routes = [
  {
    params: [],
    name: 'auth.signin',
    path: '/auth/signin',
    method: ["GET","HEAD"],
    types: {} as AuthSigninGetHead,
  },
  {
    params: [],
    name: 'auth.login',
    path: '/auth/login',
    method: ["POST"],
    types: {} as AuthLoginPost,
  },
  {
    params: [],
    name: 'auth.signup',
    path: '/auth/signup',
    method: ["GET","HEAD"],
    types: {} as AuthSignupGetHead,
  },
  {
    params: [],
    name: 'auth.forgot_password',
    path: '/auth/forgot_password',
    method: ["GET","HEAD"],
    types: {} as AuthForgotpasswordGetHead,
  },
  {
    params: [],
    name: 'auth.logout',
    path: '/logout',
    method: ["DELETE"],
    types: {} as LogoutDelete,
  },
  {
    params: [],
    name: 'terms',
    path: '/terms',
    method: ["GET","HEAD"],
    types: {} as unknown,
  },
  {
    params: [],
    name: 'privacy',
    path: '/privacy',
    method: ["GET","HEAD"],
    types: {} as unknown,
  },
] as const;
export const api = {
  routes,
  definition: {} as ApiDefinition
}
declare module '@tuyau/inertia/types' {
  type InertiaApi = typeof api
  export interface Api extends InertiaApi {}
}
