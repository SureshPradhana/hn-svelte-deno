<script lang="ts">
	import News from '$lib/components/News.svelte';
	import { onMount } from 'svelte';
	import type { NewsItem } from '$lib/types';
	import { getIds, getItems } from '$lib/utils/utils';
	let items: NewsItem[] = [];

	let nextIndex = 15;
	let ids;
	let currentIds;

	onMount(async () => {
		ids = await getIds('jobstories');
		currentIds = ids.slice(0, nextIndex);
		items = await getItems(currentIds);
	});

	async function loadMoreItems() {
		currentIds = ids.slice(nextIndex, nextIndex + 15);
		items = await getItems(currentIds);
		nextIndex += 15;
	}
</script>

{#each items as item, i}
	<News key={i} {item} />
{/each}
{#if items.length > 0}
	<button on:click={loadMoreItems}>More</button>
{/if}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
