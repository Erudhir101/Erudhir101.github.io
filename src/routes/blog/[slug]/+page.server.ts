import type { PageServerLoad } from './$types';
import type { Post } from '$lib/types.ts';
import { readFile } from 'node:fs/promises';
import matter from 'gray-matter';

async function getPost(slug: string): Promise<{ meta: Post; content: string } | undefined> {
	const postPath = `src/posts/${slug}.md`;
	try {
		const fileContents = await readFile(postPath, 'utf8');
		const { data: meta, content } = matter(fileContents);
		return { meta, content } as { meta: Post; content: string };
	} catch (error) {
		console.error('Error getting posts:', error);
	}
}

export const load: PageServerLoad = async ({ params }) => {
	if (params.slug) return { post: await getPost(params?.slug) };
	return { post: undefined };
};
