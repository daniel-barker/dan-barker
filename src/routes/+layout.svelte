<script>
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import '../app.css';

	injectAnalytics();
	injectSpeedInsights();

	let { children } = $props();
</script>

{@render children()}
