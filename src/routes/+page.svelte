<script lang="ts">
	import Button8831 from '$lib/components/8831.svelte';
	import Image from '$lib/components/Image.svelte';

	let { data } = $props();
</script>

<div class="m-auto mt-72 grid size-fit max-w-xl gap-2">
	<div class="w-fit">
		<div class="flex gap-2">
			<Image height={75} width={75} src="/api/avatar"></Image>
			<div class=" my-auto grid h-min">
				<h1 class="text-cirro items-center text-2xl font-bold leading-6">
					{data.discord.username}
				</h1>
				<p class="leading-5">(he/they) snow leopard programmer thing</p>
			</div>
		</div>
	</div>

	<div>
		<p>
			Hi there, and welcome to my website! My name is <span class="text-cirro font-black"
				>cirro</span
			>! I'm 18 years old, I like programming, I'm a Linux enthusiast, and I'm an amatuer sysadmin.
			I don't really have that much of an online presence, but I am on Discord. If you would like to
			message me, send a friend request to
			<span class="text-cirro font-black">@{data.discord.username}</span>. My requests aren't always
			open, so if that fails, then you can send me an Email at
			<span class="text-cirro font-black">cirro[at]snep.lol</span>.
		</p>
	</div>

	<div class="grid size-fit grid-cols-6 gap-2.5">
		<Button8831 src={{ default: './img/buttons/cirro.png' }} href="https://cirroskais.xyz"
		></Button8831>
		<Button8831 src={import("$lib/img/buttons/robin.png")} href="https://x.com/Porpss1"
		></Button8831>
		<Button8831 src={import("$lib/img/buttons/bcd.png")} href="https://dfuser.xyz"></Button8831>
		<Button8831
			src={import("$lib/img/buttons/firefox.gif")}
			href="https://www.mozilla.org/en-US/firefox/new"
		></Button8831>
		<Button8831 src={import("$lib/img/buttons/micro.png")} href="https://m1cro.xyz"></Button8831>
		<Button8831 src={import("$lib/img/buttons/osaka.png")} href="https://azumanga.xyz/"
		></Button8831>
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
