import React, { useState } from 'react';
import CurrencyField from '../components/CurrencyField';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CurrencyField> = {
  title: 'CurrencyField',
  component: CurrencyField,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof CurrencyField>;

const CurrencyFieldStory = (args: React.ComponentProps<typeof CurrencyField>) => {
  const [value, setValue] = useState(args.value);

  return (
    <CurrencyField
      {...args}
      value={value}
      onChange={(newValue: string) => {
        console.log(newValue);
        setValue(newValue);
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => <CurrencyFieldStory {...args} />,
  args: {
    value: 'R$ 0,00',
  },
};
