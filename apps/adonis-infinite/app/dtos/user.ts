import { Entity } from '#dtos/entity';
import type { UserIdentifier } from '#dtos/user_identifier';

interface Properties {
	id: UserIdentifier;
	name: string;
	email: string;
	password: string;
	avatarUrl: string | null;
	isAdmin: boolean;
}

export class User extends Entity<Properties> {
	getPassword() {
		return this.props.password;
	}

	isAdmin() {
		return this.props.isAdmin;
	}

	static create(properties: Properties) {
		return new this(properties);
	}
}