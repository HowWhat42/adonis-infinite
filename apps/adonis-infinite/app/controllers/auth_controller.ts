import { AuthService } from '#services/auth_service';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http';

@inject()
export default class AuthController {
  constructor(private authService: AuthService) {}

	async signin({ inertia }: HttpContext) {
		return inertia.render('auth/signin');
	}

  async login({ auth, request, response, session }: HttpContext) {
		const { email, password } = request.all();

		const user = await this.authService.attempt(email, password);

		if (!user) {
			session.flash('errors', "Aucun compte n'a été trouvé avec les identifiants fournis.");
			session.flashAll();

			return response.redirect().back();
		}

		await auth.use('web').login(user);

		return response.redirect().toPath('/');
	}

	async signup({ inertia }: HttpContext) {
		return inertia.render('auth/signup');
	}

	async logout({ auth, response }: HttpContext) {
		await auth.use('web').logout();

		return response.redirect().toPath('/');
	}
}