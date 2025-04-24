<script>
	import { onMount } from 'svelte';

	let formData = {
		name: '',
		email: '',
		message: ''
	};

	let status = {
		submitting: false,
		success: false,
		error: false,
		message: ''
	};

	// Google Apps Script deployment ID - you'll need to replace this with your actual deployment ID
	// after setting up your Google Apps Script
	const SCRIPT_URL =
		'https://script.google.com/macros/s/AKfycbyNy63vNFOQfXmPHgqtneinIwpvCcpqUjMunBXudpwSvxjHVattJQjCntG3QkAjkUUCsA/exec';

	async function handleSubmit() {
		status.submitting = true;
		status.success = false;
		status.error = false;
		status.message = '';

		try {
			const response = await fetch(SCRIPT_URL, {
				method: 'POST',
				mode: 'no-cors', // This is important for CORS issues with Google Apps Script
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			// Since mode is 'no-cors', we can't actually read the response
			// So we assume success if no error is thrown
			status.success = true;
			status.message = 'Your message has been sent! I will get back to you soon.';

			// Reset form
			formData = {
				name: '',
				email: '',
				message: ''
			};
		} catch (error) {
			status.error = true;
			status.message = 'There was an error sending your message. Please try again.';
			console.error('Form submission error:', error);
		} finally {
			status.submitting = false;
		}
	}
</script>

<svelte:head>
	<title>Contact | Daniel Barker</title>
	<meta name="description" content="Get in touch with Daniel Barker, freelance web developer." />
</svelte:head>

<section class="container mx-auto px-4 py-16">
	<div class="mx-auto max-w-3xl">
		<h1 class="mb-6 text-4xl font-bold text-slate-800 dark:text-white">Contact Me</h1>
		<p class="mb-8 text-lg text-slate-600 dark:text-slate-300">
			Have a question or want to work together? Fill out the form below and I'll get back to you as
			soon as possible.
		</p>

		<form
			on:submit|preventDefault={handleSubmit}
			class="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800"
		>
			<div class="mb-4">
				<label for="name" class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
					>Name</label
				>
				<input
					type="text"
					id="name"
					bind:value={formData.name}
					required
					class="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
				/>
			</div>

			<div class="mb-4">
				<label for="email" class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
					>Email</label
				>
				<input
					type="email"
					id="email"
					bind:value={formData.email}
					required
					class="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
				/>
			</div>

			<div class="mb-6">
				<label
					for="message"
					class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label
				>
				<textarea
					id="message"
					bind:value={formData.message}
					required
					rows="5"
					class="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
				></textarea>
			</div>

			{#if status.success}
				<div
					class="mb-6 rounded-md bg-green-100 p-3 text-green-800 dark:bg-green-900 dark:text-green-100"
				>
					{status.message}
				</div>
			{:else if status.error}
				<div class="mb-6 rounded-md bg-red-100 p-3 text-red-800 dark:bg-red-900 dark:text-red-100">
					{status.message}
				</div>
			{/if}

			<button
				type="submit"
				disabled={status.submitting}
				class="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
			>
				{status.submitting ? 'Sending...' : 'Send Message'}
			</button>
		</form>
	</div>
</section>
