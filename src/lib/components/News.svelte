<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { icons } from 'feather-icons';
	import type { NewsItem } from '$lib/types';
	import { getTimeAgo, getDomain } from '$lib/utils/utils';

	export let item: NewsItem;
</script>

<div class="flex items-center space-x-2 text-sm">
	<div class="flex">
		{item.score}
		{@html icons['chevrons-up'].toSvg({ class: 'feather', width: '18px', height: '18px' })}
	</div>
	<Separator orientation="vertical" />
	<div>
		<div class="space-y-1">
			<h4 class="text-md font-semibold leading-none inline">{item.title}</h4>
			{#if item.url}
				<p class=" inline text-sm px-1 text-muted-foreground">
					<a href={item.url}>({getDomain(item.url)})</a>
				</p>
			{/if}
		</div>
		<div class="flex h-5 items-center space-x-4 text-xs">
			<div>{item.by}</div>
			<Separator orientation="vertical" />
			<div>{getTimeAgo(item.time)}</div>
			<Separator orientation="vertical" />
			{#if item.descendants}
				<div>{item.descendants} comments</div>
			{/if}
		</div>
	</div>
</div>
<Separator class="my-2" />
