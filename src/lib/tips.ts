import path from 'path';
import matter from 'gray-matter';
import type { Post } from '$lib/types';
import type { Attachment } from 'svelte/attachments';

export function TimeToRead(content: string): string {
	if (!content) return '';
	const time = content.trim().split(' ').length / 100;
	return time < 1 ? (time * 60).toFixed(2) + 's' : time.toFixed(2) + 'mim';
}

export async function getPosts(): Promise<Post[]> {
	const postsDir = 'src/posts';

	try {
		if (typeof window === 'undefined') {
			const { readdir, readFile } = await import('node:fs/promises');
			const filenames = await readdir(postsDir);

			const mdFilenames = filenames.filter((fn) => fn.endsWith('.md'));

			const postsData = await Promise.all(
				mdFilenames.map(async (filename) => {
					const filePath = path.join(postsDir, filename);

					const fileContents = await readFile(filePath, 'utf8');

					const { data } = matter(fileContents);
					const slug = filename.replace('.md', '');

					return { ...data, slug } as Post;
				})
			);

			const filteredAndSorted = postsData
				.filter((post) => post.published)
				.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());

			return filteredAndSorted;
		}
	} catch (error) {
		console.error('Error getting posts:', error);
	}
	return [];
}

export function clickOutside(callback: () => void): Attachment {
	return (node) => {
		function handleClick(event: Event) {
			if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
				callback();
			}
		}
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	};
}
