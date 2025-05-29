import type { Meta, StoryObj } from '@storybook/react';
import { StoreCard } from './StoreCard';

const meta: Meta<typeof StoreCard> = {
  component: StoreCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StoreCard>;

export const Default: Story = {
  args: {
    store: {
      id: 1,
      name: 'Restaurant Name',
      slug: 'restaurant-name',
      phones: '(11) 99999-9999',
      virtualAvatar: {
        '300': 'https://picsum.photos/400/300',
        default: 'https://picsum.photos/400/300',
      },
      status: 'OPEN',
      aiqentregaActive: true,
      timeToDelivery: '30-45 min',
      freeDelivery: true,
      neighborhoodRestaurants: [
        {
          virtualDeliveryFee: 'grátis',
          id: 1,
          virtualName: 'Bairro 1',
        },
      ],
      ratings: {
        average: 4.5,
        count: 100,
      },
    },
  },
};

export const Closed: Story = {
  args: {
    store: {
      id: 2,
      name: 'Closed Restaurant',
      slug: 'closed-restaurant',
      phones: '(11) 99999-9999',
      virtualAvatar: {
        '300': 'https://picsum.photos/400/300',
        default: 'https://picsum.photos/400/300',
      },
      status: 'CLOSED',
      aiqentregaActive: true,
      timeToDelivery: '30-45 min',
      freeDelivery: false,
      neighborhoodRestaurants: [
        {
          virtualDeliveryFee: 'R$ 5,00',
          id: 2,
          virtualName: 'Bairro 2',
        },
      ],
      ratings: {
        average: 4.0,
        count: 50,
      },
    },
  },
};
