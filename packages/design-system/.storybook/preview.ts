import '../src/css/globals.css';

import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
	parameters: {
		layout: 'centered',
	},
	decorators: [
		withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
	],
};

export default preview;