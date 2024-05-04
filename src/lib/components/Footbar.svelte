<script>
	export let links;
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
</script>

<footer
	class="flex flex-col items-center justify-center p-2 gap-3 bg-gray-100 text-black
text-sm"
>
	<!-- <ul class="flex space-x-4"> -->
	<!-- 	{#each links as link} -->
	<!-- 		<li> -->
	<!-- 			<a href={link.href}>{link.name}</a> -->
	<!-- 		</li> -->
	<!-- 	{/each} -->
	<!-- </ul> -->
	<p>
		This is a simple <a href="https://news.ycombinator.com/news">Hacker News clone</a>
	</p>

	<!-- <div class="flex w-full max-w-sm flex-row h-7"> -->
	<!-- 	<Label for="email-2" class="align-center p-1">Search:</Label> -->
	<!-- 	<Input -->
	<!-- 		type="text" -->
	<!-- 		id="email-2" -->
	<!-- 		placeholder="Search" -->
	<!-- 		class="h-auto -->
	<!-- 	border-black  rounded text-black" -->
	<!-- 	/> -->
	<!-- </div> -->
</footer>
