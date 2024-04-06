<script lang="ts">
	import Jobs from '$lib/components/Jobs.svelte';
	let items = Array.from({ length: 13 });
</script>

<p class="py-2">These are jobs at YC startups. See more at <a href="/">ycombinator.com/jobs.</a></p>
{#each items as _, i}
	<Jobs key={i} />
{/each}
<a href="/newest">More</a>
