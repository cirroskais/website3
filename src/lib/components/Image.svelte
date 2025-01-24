<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	let props: { src: string; width?: number; height?: number } = $props();

	let loaded: string | false = $state(false);

	onMount(async () => {
		if (props.src) {
			const preload = new Image();
			preload.src = props.src;
			preload.onload = () => (loaded = props.src);
		}
	});
</script>

<div class={' rounded-sm bg-neutral-600/20'}>
	{#if loaded}
		<img
			in:scale
			class={'z-10 rounded-lg'}
			src={loaded}
			alt=""
			height={props.height}
			width={props.width}
		/>
	{/if}
</div>
