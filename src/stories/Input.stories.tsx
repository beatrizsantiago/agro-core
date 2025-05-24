import { TextField } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
  args: {
    color: 'primary',
    variant: 'standard',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
};
