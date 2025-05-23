import { Button } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Botão Primário',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'contained',
    color: 'secondary',
    children: 'Botão Secundário',
  },
};
