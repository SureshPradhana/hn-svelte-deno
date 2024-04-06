<script lang="ts">
	import Comment from '$lib/components/Comment.svelte';
	let items = Array.from({ length: 13 });
</script>

{#each items as _, i}
	<Comment key={i} />
{/each}
<a href="/newest">More</a>
