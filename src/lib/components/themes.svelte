<script lang="ts">
	import Palette from 'lucide-svelte/icons/palette';
	import Check from 'lucide-svelte/icons/check';
	import { setTheme, theme as themeMode } from 'mode-watcher';
	import { themes } from '$lib/types';
	import { clickOutside } from '$lib/tips';
	let { class: className = '', content = '' } = $props();
	let isOpened = $state(false);
</script>

<details
	bind:open={isOpened}
	{@attach clickOutside(() => {
		if (isOpened) isOpened = false;
	})}
	class="dropdown {className}"
>
	<summary class="btn w-full btn-outline btn-secondary">
		<Palette size={20} />
	</summary>
	<ul class="dropdown-content menu w-30 {content} gap-2 rounded-box bg-base-300 hover:bg-none">
		{#each themes as theme (theme)}
			<li>
				<button
					aria-label="choose theme"
					value={theme}
					class="btn flex justify-around px-2"
					onclick={() => setTheme(theme)}
					>{theme}
					<Check size={16} class="text-success {themeMode.current === theme ? '' : 'invisible'}" />
				</button>
			</li>
		{/each}
	</ul>
</details>
