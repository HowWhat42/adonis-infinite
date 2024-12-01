import type { MakeTuyauRequest, MakeTuyauResponse } from '@tuyau/utils/types'
import type { InferInput } from '@vinejs/vine/types'

type SigninGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['signin']>
}
type LoginPost = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['login']>
}
type SignupGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['signup']>
}
type LogoutDelete = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['logout']>
}
export interface ApiDefinition {
  'signin': {
    '$url': {
    };
    '$get': SigninGetHead;
    '$head': SigninGetHead;
  };
  'login': {
    '$url': {
    };
    '$post': LoginPost;
  };
  'signup': {
    '$url': {
    };
    '$get': SignupGetHead;
    '$head': SignupGetHead;
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
    path: '/signin',
    method: ["GET","HEAD"],
    types: {} as SigninGetHead,
  },
  {
    params: [],
    name: 'auth.login',
    path: '/login',
    method: ["POST"],
    types: {} as LoginPost,
  },
  {
    params: [],
    name: 'auth.signup',
    path: '/signup',
    method: ["GET","HEAD"],
    types: {} as SignupGetHead,
  },
  {
    params: [],
    name: 'auth.logout',
    path: '/logout',
    method: ["DELETE"],
    types: {} as LogoutDelete,
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
