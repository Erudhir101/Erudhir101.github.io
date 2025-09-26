<script lang="ts">
	import Search from 'lucide-svelte/icons/search';
	import { resolve } from '$app/paths';
	let { data } = $props();
	let search = $state('');
	let posts = $derived(
		data.posts.filter((val) => val.title.toLowerCase().includes(search.toLowerCase()))
	);
</script>

<div class="hero min-h-screen items-start bg-base-200 py-5">
	<div class="hero-content flex-wrap text-center">
		<div class="flex max-w-lg flex-col items-center gap-15">
			<div>
				<h1 class="pb-5 text-3xl leading-relaxed font-bold sm:text-5xl">Artigos que escrevi</h1>
				<p class="text-base-content/70">
					Apenas alguns artigos que escrevi sobre vários assuntos, que compõem o meu blog
				</p>
			</div>
			<label class="input min-h-15 w-full text-lg">
				<Search size={22} class="text-base-content/50" />
				<input
					type="search"
					bind:value={search}
					autocomplete="off"
					required
					placeholder="Encontrar"
				/>
			</label>

			<h3 class="card-title justify-center text-base-content/80">
				{posts.length} resultados de {data.posts.length}
			</h3>
			<div class="flex w-full flex-col gap-5">
				{#each posts as post (post.title)}
					<a href={resolve('/blog/[slug]', { slug: post.slug })}>
						<div
							class="card w-full bg-base-100 shadow-sm transition-colors duration-200 hover:text-secondary"
						>
							<div class="card-body">
								<h2 class="card-title justify-center">{post.title}</h2>
							</div>
						</div></a
					>
				{/each}
			</div>
		</div>
	</div>
</div>
