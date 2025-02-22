<script lang="ts">
	import Button8831 from '$lib/components/8831.svelte';
	import Image from '$lib/components/Image.svelte';
	import SocialLink from '$lib/components/SocialLink.svelte';

	import Librefm from '$lib/img/icons/librefm.png?enhanced';
	import Fediverse from '$lib/img/icons/fediverse.png?enhanced';
	import Github from '$lib/img/icons/github.svg';
	import Lastfm from '$lib/img/icons/lastfm.png?enhanced';

	import Robin from '$lib/img/buttons/robin.png?enhanced';
	import dfuser from '$lib/img/buttons/bcd.png?enhanced';
	import Firefox from '$lib/img/buttons/firefox.gif?enhanced';
	import IndieWeb from '$lib/img/buttons/indieweb.gif?enhanced';
	import micro from '$lib/img/buttons/micro.png?enhanced';
	import percocet from '$lib/img/buttons/percocet.png?enhanced';
	import SnowLeopards from '$lib/img/buttons/snowleopards.png?enhanced';
	import split from '$lib/img/buttons/split.png?enhanced';
	import Stitch from '$lib/img/buttons/stitch.png?enhanced';
	import TwoPaws from '$lib/img/buttons/twopaws.png?enhanced';
	import veast from '$lib/img/buttons/veast.png?enhanced';

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
			<span class="font-black text-cirro">cirro[at]snep.lol</span>. If you would like to add my
			button to your site, please link the button and do not rehost the image. If you let me know
			that you've added my button, I'll add yours!
		</p>
	</div>

	<div class="flex w-fit flex-wrap gap-2">
		<Button8831 src={'./img/buttons/cirro.png'} href="https://cirroskais.xyz"></Button8831>
		<Button8831 src={Robin} href="https://x.com/Porpss1"></Button8831>
		<Button8831 src={dfuser} href="https://dfuser.xyz"></Button8831>
		<Button8831 src={Firefox} href="https://www.mozilla.org/en-US/firefox/new"></Button8831>
		<Button8831 src={IndieWeb} href="https://indieweb.org"></Button8831>
		<Button8831 src={micro} href="https://m1cro.xyz"></Button8831>
		<Button8831 src={percocet} href="https://percocet.monster"></Button8831>
		<Button8831 src={SnowLeopards}></Button8831>
		<Button8831 src={split} href="https://split.pet"></Button8831>
		<Button8831 src={Stitch} href="https://liloandstit.ch"></Button8831>
		<Button8831 src={TwoPaws}></Button8831>
		<Button8831 src={veast} href="https://vea.st"></Button8831>
	</div>
</div>
