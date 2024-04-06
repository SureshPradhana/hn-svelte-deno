<script lang="ts">
	import News from '$lib/components/News.svelte';
	let items = Array.from({ length: 13 });
</script>

<p class="py-2">
	Please read the <a href="/">rules</a>. You can also browse the <a href="/">newest</a> Show HNs.
</p>
{#each items as _, i}
	<News key={i} />
{/each}
<a href="/newest">More</a>
