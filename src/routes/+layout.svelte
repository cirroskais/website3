<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>cirroskais.xyz</title>
	<meta property="og:url" content={page.url.toString()} />
	<meta property="og:site_name" content={page.url.hostname} />
	<meta name="theme-color" content="#c4bef3" />
	<meta property="og:image" content={page.url.origin + '/api/avatar'} />
	<meta property="og:description" content="Hello! This is my website!" />
</svelte:head>

{@render children()}
