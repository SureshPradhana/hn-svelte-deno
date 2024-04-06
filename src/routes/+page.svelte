<script lang="ts">
	import News from '$lib/components/News.svelte';
	let items = Array.from({ length: 15 });
</script>

{#each items as _, i}
	<News key={i} />
{/each}
<a href="/newest">More</a>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
