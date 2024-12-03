import { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './dialog';
import { Button } from '../../atoms/button/button';

const meta = {
	component: Dialog,
	title: 'Molecules/Dialog',
	argTypes: {
		title: {
			type: 'string',
		},
		description: {
			type: 'string',
		},
	},
	args: {
		isOpen: false,
		setIsOpen: () => {},
	},
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		title: 'Dialog title',
		trigger: <Button>Open dialog</Button>,
		content: <p>Dialog content</p>,
	},
};
