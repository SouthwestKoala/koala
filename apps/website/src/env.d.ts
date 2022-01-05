/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_API_BASE_URL: string;
	readonly VITE_SANITY_DATASET: string;
	readonly VITE_SANITY_PROJECT_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
