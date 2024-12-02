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
		router.get('signin', [AuthController, 'signin']).as('auth.signin');
		router.post('login', [AuthController, 'login']).as('auth.login');
		router.get('signup', [AuthController, 'signup']).as('auth.signup');
		router.get('forgot_password', [AuthController, 'forgot_password']).as('auth.forgot-password');
	})
	.prefix('auth')
	.middleware(middleware.guest());

router.delete('logout', [AuthController, 'logout']).as('auth.logout');

router.get('terms', ({ inertia }) => inertia.render('terms')).as('terms');
router.get('privacy', ({ inertia }) => inertia.render('privacy')).as('privacy');