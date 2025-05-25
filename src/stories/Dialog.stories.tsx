import { Dialog } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dialog> = {
  title: 'Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => {},
    children: 'This is a dialog',
  },
};
