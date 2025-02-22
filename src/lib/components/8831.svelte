<script lang="ts">
	import { scale } from 'svelte/transition';

	let { href, src }: { href?: string; src: string | any } = $props();
</script>

<a class="h-[31px] w-[88px] hover:shadow-2xl focus:shadow-2xl" {href} target="_blank">
	<div class="h-full w-full rounded-sm bg-neutral-600/20">
		{#if typeof src === 'string'}
			<img in:scale class="z-10 h-full w-full" {src} alt="Button" />
		{:else}
			<enhanced:img in:scale class="z-10 h-full w-full" {src} alt="Button" />
		{/if}
	</div>
</a>
