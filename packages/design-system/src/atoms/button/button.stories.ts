import { Button } from './button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	component: Button,
	title: 'Atoms/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	argTypes: {
		color: {
			options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger'],
			control: 'select',
		},
		size: {
			options: ['small', 'medium', 'large', 'larger'],
			control: 'select',
		},
		ghost: {
			control: 'boolean',
		},
		children: {
			type: 'string',
		},
		disabled: {
			control: 'boolean',
		},
	},
	args: {
		children: 'Click me',
    color: 'primary',
		size: 'medium',
		ghost: false,
		disabled: false,
	},
};
