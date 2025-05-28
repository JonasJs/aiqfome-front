import { Meta, StoryObj } from '@storybook/react';
import { DeliveryIcon } from './DeliveryIcon';
import { DeliveryIconEnum } from './DeliveryIcon.types';
import { Text } from '../Text/Text';
import { colorsKeys } from '@/theme/theme';

const allDeliveryIcons = Object.values(DeliveryIconEnum);

const meta: Meta<typeof DeliveryIcon> = {
  component: DeliveryIcon,
  title: 'Components/DeliveryIcon',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: allDeliveryIcons,
      description: 'Select a delivery type to display',
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

export const Default: StoryObj<typeof DeliveryIcon> = {
  args: {
    type: DeliveryIconEnum.AIQ_DELIVERY_PURPLE,
  },
};

export const CustomColor: StoryObj<typeof DeliveryIcon> = {
  args: {
    type: DeliveryIconEnum.AIQ_DELIVERY_PURPLE,
    color: 'green-500',
  },
};

export const CustomSize: StoryObj<typeof DeliveryIcon> = {
  args: {
    type: DeliveryIconEnum.AIQ_DELIVERY_PURPLE,
    color: 'green-500',
    size: 40,
  },
};

export const AllDeliveryIcons: StoryObj<typeof DeliveryIcon> = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {allDeliveryIcons.map((type) => (
        <div key={type} className="flex flex-col items-center justify-center">
          <DeliveryIcon type={type} />
          <Text variant="ParagraphSmall" as="span">
            {type}
          </Text>
        </div>
      ))}
    </div>
  ),
};
