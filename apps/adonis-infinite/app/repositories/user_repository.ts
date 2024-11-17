import { User } from '#dtos/user';
import { UserIdentifier } from '#dtos/user_identifier';
import { UserRole } from '#enums/user_role';
import { db } from '#services/db';

export class UserRepository {
	async findUserByEmail(email: string) {
		const userRecord = await db.selectFrom('users').selectAll().where('email', '=', email).executeTakeFirst();

		if (!userRecord) {
			return null;
		}

		return User.create({
			id: UserIdentifier.fromString(userRecord.id),
			name: userRecord.name,
			password: userRecord.password,
			email: userRecord.email,
			avatarUrl: userRecord.avatar_url,
			isAdmin: userRecord.role === UserRole.Admin,
		});
	}
}