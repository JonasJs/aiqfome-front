import { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { ICON_MAP } from './Icon.utils';
import { Text } from '../Text/Text';
import { IconName } from './Icon.types';
import { colorsKeys } from '@/theme/theme';

const allIcons: IconName[] = Object.keys(ICON_MAP) as IconName[];

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Components/Icon',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(ICON_MAP),
      description: 'Select an icon to display',
    },
    size: {
      control: 'number',
      defaultValue: 24,
      description: 'Size of the icon',
    },
    color: {
      control: 'select',
      description: 'Color of the icon',
      options: colorsKeys,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Icon> = {
  args: {
    name: 'user',
  },
};

export const CustomColor: StoryObj<typeof Icon> = {
  args: {
    name: 'user',
    color: 'green-500',
  },
};

export const CustomSize: StoryObj<typeof Icon> = {
  args: {
    name: 'user',
    color: 'green-500',
    size: 40,
  },
};

export const AllIcons: StoryObj<typeof Icon> = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {allIcons.map((icon) => (
        <div key={icon} className="flex flex-col items-center justify-center">
          <Icon name={icon} />
          <Text variant="ParagraphSmall" as="span">
            {icon}
          </Text>
        </div>
      ))}
    </div>
  ),
};
