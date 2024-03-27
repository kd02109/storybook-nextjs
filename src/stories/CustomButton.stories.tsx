import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../app/_component/Button';

const meta: Meta<typeof Button> = {
  title: 'Custom Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Active: Story = {
  args: {
    children: 'Active',
    variant: 'active',
  },
};

export const Transparent: Story = {
  args: {
    children: 'Test',
    variant: 'transparent',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Test',
    variant: 'disabled',
  },
};
