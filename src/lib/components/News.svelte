<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { icons } from 'feather-icons';
</script>

<div class="flex items-center space-x-2 text-sm">
	<div class="flex">
		10 {@html icons['chevrons-up'].toSvg({ class: 'feather', width: '18px', height: '18px' })}
	</div>
	<Separator orientation="vertical" />
	<div>
		<div class="space-y-1">
			<h4 class="text-md font-semibold leading-none inline">Radix Primitives</h4>
			<p class=" inline text-sm px-1 text-muted-foreground">
				<a href="https://github.com">(github.com)</a>
			</p>
		</div>
		<div class="flex h-5 items-center space-x-4 text-xs">
			<div>56 points by toshi</div>
			<Separator orientation="vertical" />
			<div>4 hours ago</div>
			<Separator orientation="vertical" />
			<div>hide</div>
			<Separator orientation="vertical" />
			<div>22 comments</div>
		</div>
	</div>
</div>
<Separator class="my-2" />
