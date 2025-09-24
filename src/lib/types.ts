export const themes = ['light', 'dark', 'dracula'];

export type Tags =
	| 'IA'
	| 'QA'
	| 'UML'
	| 'desenvolvimento'
	| 'engenharia de software'
	| 'expo'
	| 'java'
	| 'javascript'
	| 'lua'
	| 'mobile'
	| 'neovim'
	| 'react'
	| 'react-native'
	| 'supabase'
	| 'svelte'
	| 'sveltekit'
	| 'typescript';

export type Post = {
	img: string;
	title: string;
	description: string;
	slug: string;
	date: string;
	tags: Tags[];
	published: boolean;
};

export type Project = {
	img: string;
	title: string;
	description: string;
	tags: Tags[];
	link: string;
};

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'long', locales = 'pt') {
	// Safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}
