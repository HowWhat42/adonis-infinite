import { Meta, StoryObj } from '@storybook/react';
import { Field } from './field';

const meta = {
	component: Field,
	title: 'Molecules/Field',
	argTypes: {
		size: {
			options: ['small', 'medium', 'large'],
			control: 'select',
		},
		label: {
			type: 'string',
		},
		errorMessage: {
			type: 'string',
		},
		helpMessage: {
			type: 'string',
		},
	},
	args: {
		disabled: false,
		size: 'medium',
		value: '',
	},
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		placeholder: 'Placeholder',
		onChange: () => {},
	},
};

export const Textarea: Story = {
	args: {
		type: 'textarea',
		placeholder: 'Placeholder',
		onChange: () => {},
	},
};

export const WithLabel: Story = {
	args: {
		label: 'Label',
		placeholder: 'Placeholder',
		onChange: () => {},
	},
};

export const WithErrorMessage: Story = {
	args: {
		invalid: true,
		errorMessage: 'Error message',
		placeholder: 'Placeholder',
		onChange: () => {},
	},
};

export const WithHelpMessage: Story = {
	args: {
		helpMessage: 'Help message',
		placeholder: 'Placeholder',
		onChange: () => {},
	},
};
