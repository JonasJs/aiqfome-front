import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ICON_MAP } from '../Icon/Icon.utils';
import { IconName } from '../Icon/Icon.types';

const allIcons: IconName[] = Object.keys(ICON_MAP) as IconName[];

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Input',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: allIcons,
      description: 'Select an icon to display',
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Input> = {
  args: {
    icon: 'user',
    placeholder: 'placeholder',
    value: '',
  },
};
