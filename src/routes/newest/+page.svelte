<script lang="ts">
	import News from '$lib/components/News.svelte';
	let items = Array.from({ length: 13 });
</script>

{#each items as _, i}
	<News key={i} />
{/each}
<a href="/newest">More</a>
