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

export function formatDate(dateInput: string | Date, style: DateStyle = 'full'): string {
	try {
		// Handle different input types
		let date: Date;

		if (typeof dateInput === 'string') {
			date = new Date(dateInput);
		} else if (dateInput instanceof Date) {
			date = dateInput;
		} else {
			// Fallback to current date if input is invalid
			console.warn('Invalid date input, using current date:', dateInput);
			date = new Date();
		}

		// Check if date is valid
		if (isNaN(date.getTime())) {
			console.warn('Invalid date value, using current date:', dateInput);
			date = new Date();
		}

		const options: Intl.DateTimeFormatOptions =
			style === 'short'
				? {
						year: 'numeric',
						month: 'short',
						day: 'numeric'
					}
				: {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
						weekday: 'long'
					};

		return date.toLocaleDateString('pt-BR', options);
	} catch (error) {
		console.error('Error formatting date:', error);
		return new Date().toLocaleDateString('pt-BR');
	}
}
