<script lang="ts">
	import { scale } from 'svelte/transition';

	let { children, style, class: className, ...rest } = $props();
	let elementCopy = $state<HTMLElement>();
	let copied = $state<boolean>(false);

	const copyClipboard = async () => {
		try {
			await navigator.clipboard.writeText(elementCopy ? elementCopy.innerText : '');
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Falha ao copiar: ', err);
		}
	};
</script>

<div class="relative my-8">
	{#key copied}
		<button
			transition:scale
			onclick={copyClipboard}
			class="btn absolute top-0 right-0 btn-md btn-secondary"
		>
			{copied ? 'Copiado' : 'Copiar'}
		</button>
	{/key}
	<pre class="{className} text overflow-scroll rounded-lg px-10 pt-5 shadow-lg" {style} {...rest}>
    {@render children?.()}
  </pre>
</div>
