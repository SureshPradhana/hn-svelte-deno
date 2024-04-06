<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { icons } from 'feather-icons';
</script>

<div class="flex items-center space-x-2 text-sm">
	<div class="flex">
		{@html icons['chevrons-up'].toSvg({ class: 'feather', width: '18px', height: '18px' })}
	</div>
	<Separator orientation="vertical" />
	<div>
		<div class="flex h-3 items-center space-x-4 text-xs text-gray-100">
			<div>56 points by toshi</div>
			<Separator orientation="vertical" />
			<div>4 hours ago</div>
			<Separator orientation="vertical" />
			<div>hide</div>
			<Separator orientation="vertical" />
			<div>22 comments</div>
		</div>
		<div class="space-y-1">
			<p class=" inline text-sm p-2 text-black">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque ex velit ullam
				doloremque distinctio delectus perspiciatis, atque quae aliquid temporibus impedit rem
				enim?Exercitationem, iste voluptatum. Ipsa, delectus distinctio!
			</p>
		</div>
	</div>
</div>
<Separator class="my-2" />
