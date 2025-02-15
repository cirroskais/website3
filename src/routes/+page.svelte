<script lang="ts">
	import Button8831 from '$lib/components/8831.svelte';
	import Image from '$lib/components/Image.svelte';
	import SocialLink from '$lib/components/SocialLink.svelte';

	import Librefm from '$lib/img/icons/librefm.png';
	import Fediverse from '$lib/img/icons/fediverse.png';
	import Github from '$lib/img/icons/github.svg';
	import Lastfm from '$lib/img/icons/lastfm.png';

	let { data } = $props();
</script>

<div class="m-auto mt-40 grid size-fit max-w-xl gap-2 md:mt-72">
	<div class="w-fit">
		<div class="flex gap-2">
			<Image height={75} width={75} src="/api/avatar"></Image>
			<div class="my-auto grid h-min gap-0.5">
				<h1 class="items-center text-2xl font-bold leading-6 text-cirro">
					{data.discord.username}
				</h1>
				<p class="leading-5">snow leopard programmer thing</p>
				<div class="flex gap-1">
					<SocialLink
						href="https://libre.fm/user/cirrosneppy"
						src={Librefm}
						rel="me"
						alt="libre.fm logo"
					></SocialLink>
					<SocialLink
						href="https://fedi.minecraft-sex.porn/cirro"
						src={Fediverse}
						rel="me"
						alt={'"fediverse" logo'}
					></SocialLink>
					<SocialLink
						href="https://github.com/cirroskais"
						src={Github}
						rel="me"
						alt="github.com logo"
					></SocialLink>
					<SocialLink
						href="https://www.last.fm/user/RAAAAAAAAAAAH"
						src={Lastfm}
						rel="me"
						alt="last.fm logo"
					></SocialLink>
				</div>
			</div>
		</div>
	</div>

	<div class="-mt-0.5">
		<p>
			Hi there, and welcome to my website! My name is <span class="font-black text-cirro"
				>cirro</span
			>! I'm 18 years old, I like programming, I'm a Linux enthusiast, and I'm an amateur sysadmin.
			I don't really have that much of an online presence, but I am on Discord. If you would like to
			message me, send a friend request to
			<span class="font-black text-cirro">@{data.discord.username}</span>. My requests aren't always
			open, so if that fails, then you can send me an Email at
			<span class="font-black text-cirro">cirro[at]snep.lol</span>.
		</p>
	</div>

	<div class="flex w-fit flex-wrap gap-2">
		<Button8831 src={{ default: './img/buttons/cirro.png' }} href="https://cirroskais.xyz"
		></Button8831>
		<Button8831 src={import("$lib/img/buttons/robin.png")} href="https://x.com/Porpss1"
		></Button8831>
		<Button8831 src={import("$lib/img/buttons/bcd.png")} href="https://dfuser.xyz"></Button8831>
		<Button8831
			src={import("$lib/img/buttons/firefox.gif")}
			href="https://www.mozilla.org/en-US/firefox/new"
		></Button8831>
		<Button8831 src={import("$lib/img/buttons/indieweb.gif")} href="https://indieweb.org"
		></Button8831>
		<Button8831 src={import("$lib/img/buttons/micro.png")} href="https://m1cro.xyz"></Button8831>
		<Button8831 src={import("$lib/img/buttons/percocet.png")} href="https://percocet.monster"
		></Button8831>
		<Button8831 src={import("$lib/img/buttons/snowleopards.png")}></Button8831>
		<Button8831 src={import("$lib/img/buttons/split.png")} href="https://split.pet"></Button8831>
		<Button8831 src={import("$lib/img/buttons/stitch.png")} href="https://liloandstit.ch"
		></Button8831>
		<Button8831 src={import("$lib/img/buttons/twopaws.png")}></Button8831>
		<Button8831 src={import("$lib/img/buttons/veast.png")} href="https://vea.st"></Button8831>
	</div>
</div>
