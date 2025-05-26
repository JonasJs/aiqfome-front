import React from 'react';
import type { Preview } from '@storybook/react';
import { themes } from '../src/theme/theme';
import '../src/app/globals.css';
import { nunito } from '../src/app/layout';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: themes.light.colors.background,
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className={`${nunito.variable} font-nunito`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
