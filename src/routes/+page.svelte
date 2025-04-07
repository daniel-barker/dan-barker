<script>
	let isVisible = false;

	// Trigger animation after component mounts
	import { onMount } from 'svelte';
	import { Database, Server, FileCode, Code2, Layers, Boxes, Terminal, Paintbrush } from '@lucide/svelte';

	const technologies = [
		{ name: 'JavaScript', icon: FileCode },
		{ name: 'Python', icon: Code2 },
		{ name: 'Express', icon: Server },
		{ name: 'MongoDB', icon: Database },
		{ name: 'SvelteKit', icon: Layers },
		{ name: 'React', icon: Boxes },
		{ name: 'Node.js', icon: Terminal },
		{ name: 'Tailwind CSS', icon: Paintbrush }
	];

	onMount(() => {
		isVisible = true;
	});
</script>

<section
	class="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900"
>
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-40 dark:opacity-20">
		<div
			class="absolute inset-0 bg-gradient-to-br from-slate-100 to-transparent dark:from-slate-800"
		></div>
		<div
			class="absolute right-0 bottom-0 h-1/2 w-1/2 bg-gradient-to-tl from-[#FF6B6B]/20 to-transparent"
		></div>
	</div>

	<div class="relative container mx-auto px-4 py-16">
		<div
			class="mx-auto max-w-4xl transform text-center transition-all duration-1000"
			class:translate-y-0={isVisible}
			class:opacity-100={isVisible}
			class:translate-y-10={!isVisible}
			class:opacity-0={!isVisible}
		>
			<div class="mb-8 flex justify-center">
				<div class="relative inline-block">
					<div class="absolute -inset-0.5 rounded-full bg-[#FF6B6B]/20 blur"></div>
					<img
						src="/images/dan-barker.webp"
						alt="Dan Barker"
						class="relative h-100 w-100 rounded-full object-cover shadow-lg ring-2 ring-[#FF6B6B]/50 dark:ring-[#FF6B6B]/30"
					/>
				</div>
			</div>

			<h1 class="mb-6 text-4xl font-bold text-slate-800 md:text-6xl dark:text-white">
				<span class="block">Crafting Digital</span>
				<span class="mt-2 block">Experiences with Code</span>
			</h1>
			<p class="mx-auto mb-8 max-w-2xl text-lg text-slate-600 md:text-xl dark:text-slate-300">
				Freelance Web Developer specializing in creating beautiful, functional, and user-friendly
				websites that drive results.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="#projects"
					class="rounded-lg bg-[#FF6B6B] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#FF5555]"
				>
					View My Work
				</a>
				<a
					href="#contact"
					class="rounded-lg border-2 border-slate-800 px-8 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-800 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-900"
				>
					Get in Touch
				</a>
			</div>

			<!-- Tech Stack Pills -->
			<div class="mt-16">
				<p class="mb-4 text-sm text-slate-500 dark:text-slate-400">Technologies I Work With</p>
				<div class="flex flex-wrap justify-center gap-4">
					{#each technologies as tech}
						<div
							class="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-slate-600 shadow-sm transition-shadow hover:shadow-md dark:bg-slate-800 dark:text-slate-300"
						>
							<svelte:component this={tech.icon} class="h-4 w-4" />
							{tech.name}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
