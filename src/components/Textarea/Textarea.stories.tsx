import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Components/Textarea',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    rows: {
      control: 'number',
      defaultValue: 5,
      description: 'Number of rows',
    },
    resizable: {
      control: 'boolean',
      defaultValue: false,
      description: 'Resizable option',
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Textarea> = {
  args: {
    rows: 5,
    resizable: false,
    placeholder: 'placeholder',
  },
};
