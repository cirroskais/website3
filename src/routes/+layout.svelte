<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	import carbon from '$lib/img/carbon.webp';

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
	<link rel="prefetch" href={carbon} as="image" type="image/webp" crossorigin="" />
	<link
		rel="preload"
		href="https://cdn.cirroskais.xyz/fonts/SNPro/SNPro-Regular.woff2"
		as="font"
		type="font/woff2"
		crossorigin=""
	/>
	<link
		rel="preload"
		href="https://cdn.cirroskais.xyz/fonts/SNPro/SNPro-Bold.woff2"
		as="font"
		type="font/woff2"
		crossorigin=""
	/>
	<link
		rel="preload"
		href="https://cdn.cirroskais.xyz/fonts/SNPro/SNPro-RegularItalic.woff2"
		as="font"
		type="font/woff2"
		crossorigin=""
	/>
	<link
		rel="preload"
		href="https://cdn.cirroskais.xyz/fonts/SNPro/SNPro-BoldItalic.woff2"
		as="font"
		type="font/woff2"
		crossorigin=""
	/>
</svelte:head>

{@render children()}
