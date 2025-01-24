<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	let { href, src }: { href?: string; src: Promise<typeof import('*.png')> | { default: string } } =
		$props();

	let loaded: string | false = $state(false);

	onMount(async () => {
		if (src) {
			const url = (await src).default;
			const preload = new Image();
			preload.src = url;
			preload.onload = () => (loaded = url);
		}
	});
</script>

<a class="h-[31px] w-[88px] hover:shadow-2xl focus:shadow-2xl" {href} target="_blank">
	<div class="h-full w-full rounded-sm bg-neutral-600/20">
		{#if loaded}
			<img in:scale class="z-10 h-full w-full" src={loaded} alt="Button" />
		{/if}
	</div>
</a>
