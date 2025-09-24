<script lang="ts">
	import Code from '$lib/components/code.svelte';
	import { formatDate, type Post } from '$lib/types.js';
	import Markdown from 'svelte-exmarkdown';
	import type { Plugin } from 'svelte-exmarkdown';
	import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
	import { createHighlighterCoreSync } from 'shiki/core';
	import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
	import ts from 'shiki/langs/typescript.mjs';
	import dracula from 'shiki/themes/dracula.mjs';

	let { data } = $props();
	let post = $derived(data.post);
	let time = $derived(timeToRead(post ? post.content : ''));

	function timeToRead(text: string): number {
		const word = text.trim().split(/\s+/);
		return word.length === 1 && word[0] === '' ? 0 : word.length / 130;
	}

	const shikiPlugin = {
		rehypePlugin: [
			rehypeShikiFromHighlighter,
			createHighlighterCoreSync({
				themes: [dracula],
				langs: [ts],
				engine: createJavaScriptRegexEngine()
			}),
			{ theme: 'dracula' }
		]
	} satisfies Plugin;
	const plugins: Plugin[] = [shikiPlugin];
</script>

{#snippet header(meta: Post)}
	<div class="card w-full max-w-4xl bg-base-200 shadow-header shadow-secondary card-xs">
		<div class="card-body justify-around p-5">
			<h2 class="card-title text-center text-4xl">{meta.title}</h2>
			<div class="flex flex-wrap items-center justify-center gap-5 text-lg text-base-content/70">
				<span class="">{formatDate(meta.date)}</span>
				<span class="size-2 rounded-full bg-base-content/70"></span>
				<span class=""
					>{time < 1 ? `${(time * 60).toFixed(2)} seg` : `${time.toFixed(2)} min`} de leitura</span
				>
			</div>
			<div class="card-actions justify-center">
				{#each meta.tags as tag (tag)}
					<span class="badge badge-md badge-error">{tag}</span>
				{/each}
			</div>
		</div>
	</div>
{/snippet}

<div class="flex w-full flex-col items-center gap-5 overflow-y-auto bg-base-300 py-10">
	{@render header(
		post
			? post.meta
			: { img: '', title: '', description: '', slug: '', date: '', tags: [], published: false }
	)}

	<article class="flex w-full max-w-4xl flex-col p-5">
		<Markdown md={post ? post.content : ''} {plugins}>
			{#snippet pre(props)}
				{@const { children, style, class: className, ...rest } = props}
				<Code {children} {style} class={className} {...rest} />
			{/snippet}
			{#snippet code(props)}
				{@const { children, style, class: className, ...rest } = props}
				<code {style} class={className} {...rest}>{@render children?.()}</code>
			{/snippet}
			{#snippet h1(props)}
				{@const { children, style, class: className, ...rest } = props}
				<h1
					{style}
					class="text-[40px] leading-tight font-semibold text-secondary {className}"
					{...rest}
				>
					{@render children?.()}
				</h1>
			{/snippet}
			{#snippet h2(props)}
				{@const { children, style, class: className, ...rest } = props}
				<h2
					{style}
					class="text-4xl leading-tight font-semibold text-secondary {className}"
					{...rest}
				>
					{@render children?.()}
				</h2>
			{/snippet}
			{#snippet h3(props)}
				{@const { children, style, class: className, ...rest } = props}
				<h3
					{style}
					class="text-3xl leading-tight font-semibold text-secondary {className}"
					{...rest}
				>
					{@render children?.()}
				</h3>
			{/snippet}
			{#snippet h4(props)}
				{@const { children, style, class: className, ...rest } = props}
				<h4
					{style}
					class="text-2xl leading-tight font-semibold text-secondary {className}"
					{...rest}
				>
					{@render children?.()}
				</h4>
			{/snippet}
			{#snippet h5(props)}
				{@const { children, style, class: className, ...rest } = props}
				<h5
					{style}
					class="text-xl leading-tight font-semibold text-secondary {className}"
					{...rest}
				>
					{@render children?.()}
				</h5>
			{/snippet}
			{#snippet h6(props)}
				{@const { children, style, class: className, ...rest } = props}
				<h6
					{style}
					class="text-lg leading-tight font-semibold text-secondary {className}"
					{...rest}
				>
					{@render children?.()}
				</h6>
			{/snippet}
			{#snippet p(props)}
				{@const { children, style, class: className, ...rest } = props}
				<p {style} class="mb-8 prose text-[1rem] sm:text-xl {className}" {...rest}>
					{@render children?.()}
				</p>
			{/snippet}
			{#snippet hr(props)}
				{@const { style, class: className, ...rest } = props}
				<hr {style} class="my-10 text-base-content/50 {className}" {...rest} />
			{/snippet}
			{#snippet ul(props)}
				{@const { children, style, class: className, ...rest } = props}
				<ul {style} class="list list-disc {className}" {...rest}>{@render children?.()}</ul>
			{/snippet}
			{#snippet ol(props)}
				{@const { children, style, class: className, ...rest } = props}
				<ol {style} class="list list-decimal {className}" {...rest}>
					{@render children?.()}
				</ol>
			{/snippet}
			{#snippet li(props)}
				{@const { children, style, class: className, ...rest } = props}
				<li
					{style}
					class="list-row list-item list-inside after:!content-none {className}"
					{...rest}
				>
					<span class="prose text-lg">
						{@render children?.()}
					</span>
				</li>
			{/snippet}
			{#snippet img(props)}
				{@const { style, class: className, ...rest } = props}
				<div class="avatar self-center">
					<div class="w-full max-w-4xl rounded-lg">
						<img {style} class={className} {...rest} />
					</div>
				</div>
			{/snippet}
		</Markdown>
	</article>
</div>

<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-bottom: 1.5rem;
	}
	p:has(div) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	code {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	:not(pre) > code {
		display: inline;
		background-color: var(--color-info-content);
		color: var(--color-info);
	}

	li {
		&::marker {
			color: color-mix(in oklab, var(--color-primary) 90%, transparent);
		}
	}
</style>
