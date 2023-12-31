import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	image: {
		domains: ['astro.build'],
		remotePatterns: [{ protocol: 'https' }],
	},
	integrations: [tailwind()],
});
