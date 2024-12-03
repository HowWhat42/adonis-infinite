import React from 'react';

type AvatarProps = {
	src: string;
};

export const Avatar = ({ src }: AvatarProps) => {
	return <img src={src} alt="avatar" className="size-24 rounded-full object-cover" />;
};
