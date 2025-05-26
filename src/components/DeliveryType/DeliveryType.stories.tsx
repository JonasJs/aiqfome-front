import { Meta, StoryObj } from '@storybook/react';
import { DeliveryType } from './DeliveryType';
import { DeliveryTypeEnum } from './DeliveryType.types';
import { Text } from '../Text/Text';
import { colorsKeys } from '@/theme/theme';

const allDeliveryTypes = Object.values(DeliveryTypeEnum);

const meta: Meta<typeof DeliveryType> = {
  component: DeliveryType,
  title: 'Components/DeliveryType',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: allDeliveryTypes,
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

export const Default: StoryObj<typeof DeliveryType> = {
  args: {
    type: DeliveryTypeEnum.AIQ_DELIVERY_PURPLE,
  },
};

export const CustomColor: StoryObj<typeof DeliveryType> = {
  args: {
    type: DeliveryTypeEnum.AIQ_DELIVERY_PURPLE,
    color: 'green-500',
  },
};

export const CustomSize: StoryObj<typeof DeliveryType> = {
  args: {
    type: DeliveryTypeEnum.AIQ_DELIVERY_PURPLE,
    color: 'green-500',
    size: 40,
  },
};

export const AllDeliveryTypes: StoryObj<typeof DeliveryType> = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {allDeliveryTypes.map((type) => (
        <div key={type} className="flex flex-col items-center justify-center">
          <DeliveryType type={type} />
          <Text variant="ParagraphSmall" as="span">
            {type}
          </Text>
        </div>
      ))}
    </div>
  ),
};
