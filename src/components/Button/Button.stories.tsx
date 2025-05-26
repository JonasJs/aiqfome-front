import type { Meta, StoryObj } from '@storybook/react';

import { Button, buttonVariants } from './Button';
import { colorsKeys } from '@/theme/theme';

const textColorOptions = colorsKeys.map((c) => `text-${c}`);

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(buttonVariants.variants.variant),
      table: {
        defaultValue: {
          summary: 'solid',
        },
      },
    },
    size: {
      control: 'select',
      options: Object.keys(buttonVariants.variants.size),
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    color: {
      options: textColorOptions,
      table: {
        defaultValue: {
          summary: 'text-white',
        },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    size: 'medium',
    variant: 'solid',
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button Outline',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button Outline',
  },
};
