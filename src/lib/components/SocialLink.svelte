<script lang="ts">
	let {
		href,
		src,
		alt,
		title,
		rel
	}: {
		href: string;
		src: string | any;
		alt: string;
		title?: string;
		rel?: string;
	} = $props();
</script>

<a class="group" {href} target="_blank" aria-label={title || new URL(href).hostname} {rel}>
	{#if typeof src === 'string'}
		<img
			class="h-5 w-5 opacity-50 transition-opacity group-hover:opacity-20 group-hover:filter"
			{src}
			{alt}
		/>
	{:else}
		<enhanced:img
			class="h-5 w-5 opacity-50 transition-opacity group-hover:opacity-20 group-hover:filter"
			{src}
			{alt}
		/>
	{/if}
</a>
