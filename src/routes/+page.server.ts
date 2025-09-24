import { getPosts } from '$lib/tips';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = (await getPosts()).slice(0, 2);
	return {
		posts
	};
};
