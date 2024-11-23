import { symbols } from '@adonisjs/auth';
import { User } from '../app/domain/user.js';
import { UserIdentifier } from '../app/domain/user_identifier.js';
import { UserRole } from '#enums/user_role';
import { db } from '#services/db';
import type { SessionGuardUser, SessionUserProviderContract } from '@adonisjs/auth/types/session';

export class SessionKyselyUserProvider implements SessionUserProviderContract<User> {
	declare [symbols.PROVIDER_REAL_USER]: User;

	async createUserForGuard(user: User): Promise<SessionGuardUser<User>> {
		return {
			getId() {
				return user.getIdentifier().toString();
			},

			getOriginal() {
				return user;
			},
		};
	}

	async findById(identifier: string): Promise<SessionGuardUser<User> | null> {
		const userRecord = await db.selectFrom('users').selectAll().where('id', '=', identifier).executeTakeFirst();

		if (!userRecord) {
			return null;
		}

		const user = User.create({
			id: UserIdentifier.fromString(userRecord.id),
			name: userRecord.name,
			password: userRecord.password,
			email: userRecord.email,
			avatarUrl: userRecord.avatar_url,
			isAdmin: userRecord.role === UserRole.Admin,
		});

		return this.createUserForGuard(user);
	}
}