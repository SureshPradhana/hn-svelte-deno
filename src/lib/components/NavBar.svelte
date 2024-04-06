<script>
	export let links;
	let home, last, linksCopy;
	$: {
		home = links[0];
		last = links[links.length - 1];
		linksCopy = [...links].slice(1, links.length - 1);
	}
</script>

<nav class="flex justify-between items-center p-4 bg-orange-800 text-white">
	<div class="flex flex-col md:flex-row xl:flex-row">
		<ul class="flex space-x-3 font-extrabold pr-2">
			<li><a href={home.href}>{home.name}</a></li>
		</ul>
		<ul class="flex space-x-4">
			<!-- 	{#each links as link (link.href)} -->
			{#each linksCopy as link}
				<li>
					<a href={link.href}>{link.name}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<ul>
			<li><a href={last.href} />{last.name}</li>
		</ul>
	</div>
</nav>
