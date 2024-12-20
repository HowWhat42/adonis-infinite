import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta = {
	component: Checkbox,
	title: 'Atoms/Checkbox',
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		checked: false,
		onCheckedChange: () => {},
	},
};

export const WithLabel: Story = {
	args: {
		label: 'Se souvenir de moi',
		checked: false,
		onCheckedChange: () => {},
	},
};
