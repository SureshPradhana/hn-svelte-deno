<script lang="ts">
	import News from '$lib/components/News.svelte';
	import { onMount } from 'svelte';
	import type { NewsItem } from '$lib/types';
	import { getIds, getItems } from '$lib/utils/utils';
	import { LoadBars } from 'svelte-loading-animation';
	let items: NewsItem[] = [];

	let nextIndex = 15;
	let ids;
	let currentIds;

	onMount(async () => {
		ids = await getIds('topstories');
		currentIds = ids.slice(0, nextIndex);
		items = await getItems(currentIds);
	});

	async function loadMoreItems() {
		currentIds = ids.slice(nextIndex, nextIndex + 15);
		items = await getItems(currentIds);
		nextIndex += 15;
	}
</script>

{#if items.length === 0}
	<div class="flex justify-center content-center">
		<LoadBars size="32px" color="red" class="mx-auto" />
	</div>
{:else}
	{#each items as item, i}
		<News key={i} {item} />
	{/each}
	<button on:click={loadMoreItems}>More</button>
{/if}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
