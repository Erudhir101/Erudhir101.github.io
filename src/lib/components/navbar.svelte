<script lang="ts">
	import { page } from '$app/state';
	import Menu from 'lucide-svelte/icons/menu';
	import Themes from './themes.svelte';
	import { clickOutside } from '$lib/tips';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	let links: Pathname[] = ['/projetos/', '/blog/'];
	let isOpened = $state(false);
	let selectedLink = $derived(page.url.pathname);
</script>

<div class="fixed top-0 left-0 z-50 flex w-full justify-center bg-base-100 shadow-sm">
	<div class="navbar max-w-3xl justify-between bg-base-100 px-0">
		<div class="navbar-start w-auto">
			<a href={resolve('/')} class="btn border-none px-0 text-xl btn-outline btn-accent"
				>Gabriel Carneiro</a
			>
		</div>
		<div class="navbar-end hidden w-auto gap-10 sm:flex">
			<div class="hidden w-auto gap-5 sm:flex">
				{#each links as link (link)}
					<a
						href={resolve(link)}
						class="link {link.slice(0, -1) === selectedLink
							? 'link-primary'
							: 'link-hover'} font-semibold underline-offset-3">{link.slice(1, -1)}</a
					>
				{/each}
			</div>
			<Themes class="dropdown-end" content="mt-3" />
		</div>
		<div class="navbar-end flex sm:hidden">
			<details
				bind:open={isOpened}
				{@attach clickOutside(() => {
					if (isOpened) isOpened = false;
				})}
				class="dropdown dropdown-end"
			>
				<summary class="btn px-3 btn-outline btn-secondary"><Menu size={20} /></summary>
				<ul class="dropdown-content menu mt-3 w-30 gap-2 rounded-box bg-base-300 hover:bg-none">
					{#each links as link (link)}
						<li>
							<a
								href={resolve(link)}
								class="link text-lg hover:bg-transparent {'/' + link === selectedLink
									? 'link-primary'
									: 'link-hover'} underline-offset-3">{link}</a
							>
						</li>
					{/each}
					<li class="mt-5">
						<Themes class="dropdown-center" content="absolute -right-2 " />
					</li>
				</ul>
			</details>
		</div>
	</div>
</div>

<style>
	:global(body) {
		padding-top: 4rem;
	}
</style>
