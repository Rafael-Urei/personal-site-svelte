import { dev } from '$app/environment';

export async function load({ fetch }) {
	const API_ENDPOINT = import.meta.env.VITE_PRIVATE_API_URL;
	const res = await fetch(API_ENDPOINT);
	const projects = await res.json();

	const sortedProjects = projects.sort((a, b) => {
		if (a.title < b.title) {
			return -1;
		}

		if (a.title > b.title) {
			return 1;
		}

		return 0;
	});

	return {
		sortedProjects
	};
}

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
