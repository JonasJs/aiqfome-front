import { Meta, StoryObj } from '@storybook/react';
import { Text, textVariants } from './Text';
import { colorsLight } from '@/theme/tokens/colors/colors.light';

const textColorOptions = Object.keys(colorsLight).map((c) => `text-${c}`);

const meta = {
  component: Text,
  title: 'Components/Text',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      description: 'Variante de texto',
      table: {
        defaultValue: { summary: 'ParagraphMedium' },
        type: { summary: 'string' },
      },
      control: 'select',
      options: Object.keys(textVariants.variants.variant),
    },
    color: {
      description: 'Cor do texto baseada no tema',
      table: {
        defaultValue: {
          summary: 'text-neutral-500',
        },
        type: {
          summary: 'ColorName',
        },
        options: Object.keys(textVariants.variants.weight),
      },
      control: 'select',
      options: textColorOptions,
    },
    weight: {
      description: 'Peso da fonte',
      table: {
        defaultValue: { summary: 'normal' },
        type: { summary: 'string' },
      },
      control: 'select',
      options: ['normal', 'semibold', 'bold'],
    },
    as: {
      description: 'Tag HTML a ser renderizada',
      table: {
        defaultValue: { summary: 'p' },
        type: { summary: 'AsTags' },
      },
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'p', 'span'],
    },
    children: {
      description: 'Conteúdo do texto',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: 'text',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

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
