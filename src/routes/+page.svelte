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

<!-- Projects Section -->
<section id="projects" class="py-20 bg-slate-50 dark:bg-slate-900">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-12 text-center">
			Featured Projects
		</h2>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
			<!-- EVSkiClub Project -->
			<div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
				<div class="p-6 md:p-8 space-y-6">
					<div class="space-y-4">
						<h3 class="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
							EVSkiClub
							<span class="text-sm font-normal text-slate-500 dark:text-slate-400">MERN Stack</span>
						</h3>
						<p class="text-slate-600 dark:text-slate-300">
							A comprehensive management system for Ellicottville Ski Club, featuring user authentication,
							content management, and automated communications.
						</p>
					</div>
					<div class="flex flex-wrap gap-2">
						{#each ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'JWT'] as tech}
							<span
								class="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-full"
							>
								{tech}
							</span>
						{/each}
					</div>
					<div class="flex justify-between items-center pt-4">
						<a
							href="https://github.com/daniel-barker/evskiclub"
							class="text-[#FF6B6B] hover:text-[#FF5555] font-semibold flex items-center gap-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Code
							<svg
								class="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>

			<!-- Slowinski Services -->
			<div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
				<div class="p-6 md:p-8 space-y-6">
					<div class="space-y-4">
						<h3 class="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
							Slowinski Services
							<span class="text-sm font-normal text-slate-500 dark:text-slate-400">SvelteKit</span>
						</h3>
						<p class="text-slate-600 dark:text-slate-300">
							A modern business website with server-side rendering, featuring a blog platform, FAQ section,
							and comprehensive service showcase.
						</p>
					</div>
					<div class="flex flex-wrap gap-2">
						{#each ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Vite', 'Vercel'] as tech}
							<span
								class="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-full"
							>
								{tech}
							</span>
						{/each}
					</div>
					<div class="flex justify-between items-center pt-4">
						<div class="flex gap-4">
							<a
								href="https://slowinskiservices.com/"
								class="text-[#FF6B6B] hover:text-[#FF5555] font-semibold flex items-center gap-2"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Site
								<svg
									class="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</a>
							<a
								href="https://github.com/daniel-barker/slowinski"
								class="text-[#FF6B6B] hover:text-[#FF5555] font-semibold flex items-center gap-2"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Code
								<svg
									class="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Turan Tattoos -->
			<div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl lg:col-span-2">
				<div class="p-6 md:p-8 space-y-6">
					<div class="space-y-4">
						<h3 class="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
							Turan Tattoos
							<span class="text-sm font-normal text-slate-500 dark:text-slate-400">Portfolio Site</span>
						</h3>
						<p class="text-slate-600 dark:text-slate-300">
							A dynamic portfolio website for a professional tattoo artist, featuring immersive video
							backgrounds, responsive image galleries, and smooth animations. Built as a Progressive Web App
							with modern performance optimizations.
						</p>
					</div>
					<div class="flex flex-wrap gap-2">
						{#each ['SvelteKit', 'TypeScript', 'TailwindCSS', 'PWA', 'Vercel', 'WebP'] as tech}
							<span
								class="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-full"
							>
								{tech}
							</span>
						{/each}
					</div>
					<div class="flex justify-between items-center pt-4">
						<div class="flex gap-4">
							<a
								href="https://www.turantattoo.com/"
								class="text-[#FF6B6B] hover:text-[#FF5555] font-semibold flex items-center gap-2"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Site
								<svg
									class="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</a>
							<a
								href="https://github.com/chriszmx/turan-tattoos"
								class="text-[#FF6B6B] hover:text-[#FF5555] font-semibold flex items-center gap-2"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Code
								<svg
									class="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about" class="py-20 bg-white dark:bg-slate-800">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6 text-center">
				About Me
			</h2>
			<div class="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 md:p-8 shadow-lg">
				<div class="space-y-6 text-slate-600 dark:text-slate-300">
					<!-- Story -->
					<div class="space-y-4">
						<h3 class="text-xl font-semibold text-slate-800 dark:text-white">
							My Journey
						</h3>
						<div class="space-y-4">
							<p class="leading-relaxed">
								I grew up in Poughkeepsie, NY, surrounded by creative people—musicians, artists, and local characters. I spent my early years taking drum and guitar lessons at a place called Let's Jam, then played in bands through my late teens and early twenties. That all shifted when my dad passed away around 21. After that, it was mostly work and trying to make life make sense.
							</p>
							<p class="leading-relaxed">
								For the next decade, I held down a bunch of retail and labor jobs—ShopRite, a cafeteria for Central Hudson, Home Depot for a few years, and eventually machine shops. I liked working with customers, talking to people, and solving problems on the floor. What I didn't love was the hustle-for-the-sake-of-hustle attitude. I believe in working hard, not just looking busy.
							</p>
							<p class="leading-relaxed">
								At 30, my sister asked me to move to Arlington, VA to help raise my niece. That year taught me more than most—mainly that I've got a bigger heart than I give myself credit for, and that I wanted more out of life. After that, I started teaching myself to code.
							</p>
							<p class="leading-relaxed">
								I've been using computers since I was seven. I built my first HTML site when I was twelve but didn't pursue it seriously until much later. Learning to code was hard—and still is—but I stuck with it. My first paid job was building a custom CMS for the Ellicottville Ski Club with a friend, and we pulled together something clean, functional, and custom to what the client needed. That's the part I love most: listening to what people want, then building it.
							</p>
							<p class="leading-relaxed">
								I'm still figuring out where I'm going, but I know I'm headed somewhere big.
							</p>
						</div>
					</div>

					<!-- Approach -->
					<div class="space-y-4">
						<h3 class="text-xl font-semibold text-slate-800 dark:text-white">
							My Approach
						</h3>
						<div class="space-y-4">
							<p class="leading-relaxed">
								When working with clients, my core values center around transparency, collaboration, and delivering high-quality work. I try to keep communication friendly and open, helping clients understand their options and the reasoning behind my decisions. I'm flexible and willing to adjust as projects evolve, but I also know where to draw the line to maintain professional standards and avoid being taken advantage of. My goal is to build something solid, solve real problems, and get it into their hands quickly so we can refine it based on actual use. What matters most to me is that the client feels heard, respected, and ultimately happy with what we've built together.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-20 bg-slate-50 dark:bg-slate-900">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
				Let's Work Together
			</h2>
			<p class="text-lg text-slate-600 dark:text-slate-300 mb-8">
				Have a project in mind? I'd love to help bring your ideas to life.
			</p>
			<a
				href="mailto:dan@dan-barker.com"
				class="inline-flex items-center gap-2 bg-[#FF6B6B] hover:bg-[#FF5555] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
			>
				<svg
					class="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
				dan@dan-barker.com
			</a>
		</div>
	</div>
</section>
