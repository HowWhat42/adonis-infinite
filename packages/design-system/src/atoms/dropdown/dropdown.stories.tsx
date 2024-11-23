import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./dropdown";
import { Button } from "../button/button";

const meta = {
  component: Dropdown,
  title: 'Atoms/Dropdown',
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Base: Story = {
  render: (args) => {
    return (
      <Dropdown {...args}>
				<Button>Click me</Button>
			</Dropdown>
    )
  },
	args: {
		actions: [
			{
				label: 'Action 1',
				code: 'action-1',
				onClick: () => {
					alert('Action 1');
				},
			},
			{
				label: 'Action 2',
				code: 'action-2',
				onClick: () => {
					alert('Action 2');
				},
			},
		],
	},
};