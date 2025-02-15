<script lang="ts">
	let {
		href,
		src,
		alt,
		title,
		rel
	}: {
		href: string;
		src: any;
		alt: string;
		title?: string;
		rel?: string;
	} = $props();
</script>

<a class="group" {href} target="_blank" title={title || new URL(href).hostname} {rel}>
	<img
		class="h-5 w-5 opacity-50 transition-opacity group-hover:opacity-20 group-hover:filter"
		{src}
		{alt}
	/>
</a>
