<script lang="ts">
	import News from '$lib/components/News.svelte';
	let items = Array.from({ length: 13 });
</script>

<p class="py-2">Stories from April 5, 2024 (UTC)</p>
<p class="py-2">
	Go back a <a href="/">day</a>, <a href="/">month</a>, or <a href="/">year</a>. Go forward a
	<a href="/">day</a>.
</p>
{#each items as _, i}
	<News key={i} />
{/each}
{#if items}
	<button on:click={loadMoreItems}>More</button>
{/if}

<a href="/newest">More</a>
