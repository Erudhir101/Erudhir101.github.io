<script lang="ts">
	import Github from 'lucide-svelte/icons/github';
	import Link from 'lucide-svelte/icons/link';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import IFrutas from '$lib/assets/IFrutas(logo).png';
	import TechFind from '$lib/assets/TechFind(logo).png';
	import { formatDate, type Tags } from '$lib/types';
	import { TimeToRead } from '$lib/tips';
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

{#snippet project(
	img: string,
	title: string,
	description: string,
	tags: string[],
	link: string = 'https://svelte.dev'
)}
	<a href={link} target="_blank" {...link.startsWith('https') ? { rel: 'external' } : {}}>
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
					src={img}
					alt="IFrutas"
				/>
			</figure>
			<div class="card-body justify-between gap-10">
				<div>
					<h2 class="card-title text-2xl">{title}</h2>
					<p class="text-justify leading-relaxed font-normal opacity-70">{description}</p>
				</div>
				<div class="card-actions justify-end">
					{#each tags as tag (tag)}
						<div class="badge badge-outline opacity-90 badge-error hover:opacity-100">
							{tag}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</a>
{/snippet}

{#snippet card(
	img: string,
	title: string,
	description: string,
	tags: Tags[],
	link: string,
	date: string
)}
	<a href={link} {...link.startsWith('https') ? { rel: 'external' } : {}}>
		<div
			class="group card h-full border border-transparent bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-warning sm:w-100"
		>
			<figure class="pb-10">
				<img class="h-40 w-full rounded-lg object-cover shadow-sm" src={img} alt="IFrutas" />
			</figure>
			<div class="card-body justify-around gap-10 pt-2">
				<div class="relative flex flex-col flex-wrap gap-3">
					<div
						class="absolute -top-8 left-0 flex items-center gap-5 text-end font-normal text-base-content/80"
					>
						<p class="">{formatDate(date, 'short')}</p>
						<span class="size-2 rounded-full bg-base-content"></span>
						<p class="">
							{TimeToRead('alguma coisa está aqui esta qwerty asdfg zxcv hlkj cxvbxc')}
							de leitura
						</p>
					</div>
					<h2 class="card-title text-2xl">{title}</h2>
					<p class="text-justify leading-relaxed font-normal opacity-70">{description}</p>
				</div>
				<div class="card-actions justify-end">
					{#each tags as tag (tag)}
						<div class="badge badge-outline opacity-90 badge-error hover:opacity-100">
							{tag}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</a>
{/snippet}

<div class="hero min-h-[40rem] bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-3xl">
			<h1 class="text-3xl font-light sm:text-start sm:text-5xl">
				Oi, eu sou <span class="font-bold text-secondary">Gabriel Carneiro</span>
			</h1>
			<div class="flex max-w-3xl flex-col gap-5 py-8 text-justify text-lg">
				<p class="">
					Eu sou um Engenheiro de Software apaixonado pelo desenvolvimento de software e suas
					ferramentas. Adoro desenvolver projetos que ponham em prática as minhas habilidades.
				</p>
				<p class="">
					Realizo meus estudos diariamente, pesquisando sobre assuntos diversos (Engenharia de
					software, desenvolvimento, ferramentas, filosofia etc), utilizando de arquivos markdown
					que podem ser vistos no meu
					<a
						href={resolve('/projetos/')}
						class="after:content[''] after:transition-ll relative z-20 w-full px-1 after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-2 after:w-full after:bg-info/50 after:duration-200 hover:after:h-5.5"
						>blog</a
					>.
				</p>
			</div>
			<div class="flex items-center justify-center gap-5 sm:justify-start">
				<a
					href="https://www.github.com/erudhir101"
					rel="external"
					aria-label="social medias"
					class="transition-all duration-200 hover:-translate-y-1 hover:text-violet-600 dark:hover:text-violet-400"
				>
					<Github size={32} />
				</a>
				<a
					href="https://www.Linkedin.com/erudhir101"
					rel="external"
					aria-label="social medias"
					class="transition-all duration-200 hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400"
				>
					<Linkedin size={32} />
				</a>
			</div>
		</div>
	</div>
</div>

<div class="hero min-h-[50rem] bg-base-300">
	<div class="hero-content flex-col gap-15 py-10 text-center">
		<div class="self-start">
			<h1 class="text-start text-3xl font-light sm:text-5xl">Projetos</h1>
		</div>
		<div class="flex flex-col gap-5 lg:flex-row">
			{@render project(
				TechFind,
				'TechFind',
				'Serviço de construção de ecosistema de tecnologia para empresas, utilizando IA',
				['svelte', 'supabase', 'IA'],
				'https://techfind-black.vercel.app'
			)}

			{@render project(
				IFrutas,
				'IFrutas',
				'Serviço de entrega de produtos relacionados á feiras(frutas, verduras, legumes, etc)',
				['react native', 'supabase', 'mobile', 'expo'],
				'https://github.com/Erudhir101/Ifrutas'
			)}
		</div>
	</div>
</div>

<div class="hero min-h-[50rem] bg-base-200">
	<div class="hero-content flex-col gap-15 py-10 text-center">
		<div class="self-start">
			<h1 class="text-start text-3xl font-light sm:text-5xl">Blog</h1>
		</div>
		<div class="flex flex-col gap-5 lg:flex-row">
			{#each data.posts as post (post.title)}
				{@render card(
					post.img,
					post.title,
					post.description,
					post.tags,
					`/blog/${post.slug}`,
					post.date
				)}
			{/each}
		</div>
	</div>
</div>
