import ErrorLabel from '../components/ErrorLabel';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ErrorLabel> = {
  title: 'ErrorLabel',
  component: ErrorLabel,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof ErrorLabel>;

export const Default: Story = {
  args: {
    error: 'This is an error message',
  },
};

