<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>cirroskais.xyz</title>
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.toString()} />
	<meta property="og:title" content={page.url.hostname} />
	<meta property="og:image" content={page.url.origin + '/api/avatar'} />
	<meta property="og:description" content="Hello! This is my website!" />
	<meta name="theme-color" content="#c4bef3" />
</svelte:head>

{@render children()}
