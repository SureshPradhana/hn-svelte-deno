<script>
	import '../app.css';
	import { Progress } from '$lib/components/ui/progress';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footbar from '$lib/components/Footbar.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import { navigating } from '$app/stores';

	let value = 0;
	let isLoading = false;
	let footerLinks = [
		{ name: 'Guidlines', href: '/' },
		{ name: 'FAQ', href: '/' },
		{ name: 'Lists', href: '/' },
		{ name: 'API', href: '/' },
		{ name: 'Security', href: '/' },
		{ name: 'Legal', href: '/' },
		{ name: 'Apply to YC', href: '/' },
		{ name: 'Contact', href: '/' }
	];
	let links = [
		{ name: 'Hn', href: '/' },
		{ name: 'new', href: '/newest' },
		{ name: 'past', href: '/past' },
		{ name: 'comments', href: '/comments' },
		{ name: 'ask', href: '/ask' },
		{ name: 'show', href: '/show' },
		{ name: 'jobs', href: '/jobs' },
		{ name: 'submit', href: '/submit' },
		{ name: 'login', href: '/login' }
	];

	navigating.subscribe((val) => {
		if (val) {
			isLoading = true;
			// Reset value to 0 when navigation starts
			startLoadingAnimation();
			value = 0;
		}
	});

	function startLoadingAnimation() {
		function next() {
			value += 0.1;

			const remaining = 1 - value;
			if (remaining >= 0.1) {
				setTimeout(next, 70 / remaining);
			} else {
				isLoading = false;
			}
		}

		setTimeout(next, 300);
	}
</script>

<main class="flex flex-col min-h-screen max-w-screen-xl m-auto relative bg-gray-100">
	{#if isLoading}
		<Progress
			{value}
			max={1}
			class="rounded-none h-1  max-w-screen-xl m-auto absolute top-0 bg-orange-800 left-0"
		/>
	{/if}
	<NavBar {links} />

	<div class="mx-4 my-2 flex-grow">
		<slot />
	</div>
	<Separator class="my-1 h-0.5 bg-orange-800" />
	<Footbar links={footerLinks} />
</main>
