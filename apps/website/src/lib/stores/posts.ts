import { derived, writable } from 'svelte/store';

export const posts = (() => {
	const { subscribe, set, update } = writable<{ title: string; slug: string }[]>([], (set) => {
		fetch('/api/posts.json')
			.then((res) => res.json())
			.then((value) => set(value.posts))
			.catch((reason) => {
				console.log(reason);
			});
	});

	return {
		subscribe
	};
})();

export const featuredPosts = derived(posts, ($posts) => $posts.slice(0, 3));
