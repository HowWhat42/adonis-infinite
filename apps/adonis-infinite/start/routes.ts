/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js';

const AuthController = () => import('#controllers/auth_controller');
router.on('/').renderInertia('home')

router
	.group(() => {
		router.post('login', [AuthController, 'login']).as('auth.login');
	})
	.middleware(middleware.guest());

router.delete('logout', [AuthController, 'logout']).as('auth.logout');