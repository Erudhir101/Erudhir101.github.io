<script lang="ts">
	import TechFind from '$lib/assets/TechFind(logo).png';
	import IFrutas from '$lib/assets/IFrutas(logo).png';
	import { Link } from 'lucide-svelte';
	import type { Project } from '$lib/types';
	let projects: Project[] = [
		{
			img: TechFind,
			title: 'TechFind',
			description: 'Serviço de construção de ecosistema de tecnologia para empresas, utilizando IA',
			tags: ['svelte', 'supabase', 'IA'],
			link: 'https://techfind-black.vercel.app'
		},
		{
			img: IFrutas,
			title: 'IFrutas',
			description:
				'Serviço de entrega de produtos relacionados á feiras(frutas, verduras, legumes, etc)',
			tags: ['react-native', 'supabase', 'mobile', 'expo'],
			link: 'https://github.com/Erudhir101/Ifrutas'
		}
	];
</script>

{#snippet project(project: Project)}
	<a href={project.link || ''}>
		<div
			class="group card h-full border border-transparent bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-5 hover:border-accent sm:w-100"
		>
			<Link
				class="absolute top-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-90"
				size={28}
			/>
			<figure class="pt-10 pb-5">
				<img
					class="h-30 max-h-40 rounded-lg object-cover shadow-sm shadow-base-content sm:h-40"
					src={project.img}
					alt="IFrutas"
				/>
			</figure>
			<div class="card-body justify-between gap-10">
				<div>
					<h2 class="card-title text-2xl">{project.title}</h2>
					<p class="text-justify leading-relaxed font-normal opacity-70">{project.description}</p>
				</div>
				<div class="card-actions justify-end">
					{#each project.tags as tag (tag)}
						<div class="badge badge-outline opacity-90 badge-error hover:opacity-100">
							{tag}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</a>
{/snippet}

<div class="hero min-h-screen items-start bg-base-200 py-5">
	<div class="hero-content flex-wrap text-center">
		<div class="flex max-w-lg flex-col items-center gap-15">
			<div>
				<h1 class="pb-5 text-3xl leading-relaxed font-bold sm:text-5xl">Projetos que Fiz</h1>
				<p class="text-base-content/70">Aqui estão os projetos pessoais e aqueles que participei</p>
			</div>
			<div class="flex flex-col gap-5">
				{#each projects as proj (proj.title)}
					{@render project(proj)}
				{/each}
			</div>
		</div>
	</div>
</div>
