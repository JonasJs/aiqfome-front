import { Meta, StoryObj } from '@storybook/react';
import { Text, textVariants } from './Text';
import { colorsLight } from '@/theme/tokens/colors/colors.light';

const textColorOptions = Object.keys(colorsLight).map((c) => `text-${c}`);

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Components/Text',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      description: 'Text variant',
      table: {
        defaultValue: {
          summary: 'ParagraphMedium',
        },
        type: {
          summary: 'string',
        },
      },
      control: 'select',
      options: Object.keys(textVariants.variants.variant),
    },
    color: {
      description: 'Text color (from theme)',
      table: {
        defaultValue: {
          summary: 'text-neutral-500',
        },
        type: {
          summary: 'ColorName',
        },
      },
      control: 'select',
      options: textColorOptions,
    },
    weight: {
      description: 'Font weight',
      table: {
        defaultValue: { summary: 'normal' },
        type: {
          summary: 'string',
        },
      },
      control: 'select',
      options: Object.keys(textVariants.variants.weight),
    },
    as: {
      description: 'HTML tag to render',
      table: {
        defaultValue: {
          summary: 'p',
        },
        type: {
          summary: 'AsTags',
        },
      },
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'p', 'span'],
    },
    children: {
      description: 'Text content',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    as: 'p',
    variant: 'ParagraphMedium',
    weight: 'normal',
    color: 'text-neutral-700',
  },
};

export const Heading: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    as: 'h1',
    variant: 'HeadingLarge',
  },
};

export const Paragraph: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    as: 'p',
    variant: 'ParagraphLarge',
  },
};
