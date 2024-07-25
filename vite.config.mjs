import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
	if (mode === "vercel") {
		return {};
	}

	return {
		esbuild: {
			minifyIdentifiers: false,
		},
		build: {
			lib: {
				entry: resolve(__dirname, "src/index.js"),
				name: "StimulusEasepick",
				fileName: "stimulus-easepick",
			},
			rollupOptions: {
				external: ["@hotwired/stimulus", "@easepick/bundle"],
				output: {
					globals: {
						"@hotwired/stimulus": "Stimulus",
						"@easepick/bundle": "Easepick",
					},
				},
			},
		},
	};
});
