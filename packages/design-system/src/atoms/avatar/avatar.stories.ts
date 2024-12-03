import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';

const meta = {
	component: Avatar,
	title: 'Atoms/Avatar',
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		src: 'https://picsum.photos/id/10/200/200',
	},
};
