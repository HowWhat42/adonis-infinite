import { colors } from '@iflab/design-system/tokens';
import defineConfig from '@iflab/tooling/unocss';

export default defineConfig({
	theme: {
		colors,
	},
	content: {
		filesystem: ['./inertia/**/*.tsx', './node_modules/@iflab/design-system/**/*.tsx'],
	},
});