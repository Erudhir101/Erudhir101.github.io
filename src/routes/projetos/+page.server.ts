import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	return { md: "```typescript\nconsole.log('Hello, world!');\n```" };
};
