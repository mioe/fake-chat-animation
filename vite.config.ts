import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	console.log('🦕 vite.config.ts/defineConfig', command, mode)

	return {
		base: mode === 'development' ? './' : '/fake-chat-animation/',

		plugins: [
			vue(),

			// https://github.com/unocss/unocss
			Unocss(),
		],
	}
})
