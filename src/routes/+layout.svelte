<script>
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import '../app.css';

	injectAnalytics();
	injectSpeedInsights();

	let { children } = $props();

	const navItems = [
		{ href: '#about', text: 'About' },
		{ href: '#experience', text: 'Experience' },
		{ href: '#skills', text: 'Skills' },
		{ href: '#projects', text: 'Projects' },
		{ href: '/contact', text: 'Contact' }
	];
</script>

<div class="min-h-screen bg-slate-50 dark:bg-slate-900">
	<header
		class="fixed top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-sm dark:bg-slate-800/80"
	>
		<nav class="container mx-auto px-4 py-4">
			<div class="flex items-center justify-between">
				<a href="/" class="text-xl font-bold text-slate-800 dark:text-white">Daniel Barker</a>
				<ul class="hidden space-x-8 md:flex">
					{#each navItems as item}
						<li>
							<a
								href={item.href}
								class="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
							>
								{item.text}
							</a>
						</li>
					{/each}
				</ul>
				<button
					class="p-2 text-slate-600 hover:text-slate-900 md:hidden dark:text-slate-300 dark:hover:text-white"
					aria-label="Menu"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</nav>
	</header>

	<main class="pt-20 pb-16">
		{@render children()}
	</main>

	<footer class="bg-slate-800 py-8 text-white">
		<div class="container mx-auto px-4">
			<div class="flex flex-col items-center justify-between md:flex-row">
				<div class="mb-4 text-center md:mb-0 md:text-left">
					<p class="text-sm">
						&copy; {new Date().getFullYear()} Daniel Barker. All rights reserved.
					</p>
				</div>
				<div class="flex space-x-6">
					<a
						href="https://github.com/daniel-barker"
						class="text-slate-300 transition-colors hover:text-white"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span class="sr-only">GitHub</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path
								fill-rule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>
