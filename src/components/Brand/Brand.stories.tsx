import { Meta, StoryObj } from '@storybook/react';
import { Brand } from './Brand';
import { Text } from '../Text/Text';
import { colorsKeys } from '@/theme/theme';
import { BRAND_VARIANT_MAP } from './Brand.utils';
import { Variants } from './Brand.types';

const allVariants: Variants[] = Object.keys(BRAND_VARIANT_MAP) as Variants[];

const meta: Meta<typeof Brand> = {
  component: Brand,
  title: 'Components/Brand',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: allVariants,
      description: 'Select a brand variant to display',
    },
    size: {
      control: 'number',
      defaultValue: 34,
      description: 'Size of the brand icon',
    },
    color: {
      control: 'select',
      description: 'Color of the brand icon',
      options: colorsKeys,
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Brand> = {
  args: {},
};

export const CustomColor: StoryObj<typeof Brand> = {
  args: {
    color: 'green-500',
  },
};

export const CustomSize: StoryObj<typeof Brand> = {
  args: {
    color: 'green-500',
    size: 40,
  },
};

export const AllVariants: StoryObj<typeof Brand> = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {allVariants.map((variant) => (
        <div
          key={variant}
          className="flex flex-col items-center justify-end gap-1"
        >
          <Brand variant={variant} />
          <Text variant="ParagraphSmall" as="span">
            {variant}
          </Text>
        </div>
      ))}
    </div>
  ),
};
