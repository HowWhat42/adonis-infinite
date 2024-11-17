import type { MakeTuyauRequest, MakeTuyauResponse } from '@tuyau/utils/types'
import type { InferInput } from '@vinejs/vine/types'

type LoginPost = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['login']>
}
type LogoutDelete = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/auth_controller.ts').default['logout']>
}
export interface ApiDefinition {
  'login': {
    '$url': {
    };
    '$post': LoginPost;
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
    name: 'auth.login',
    path: '/login',
    method: ["POST"],
    types: {} as LoginPost,
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
