import discord from '$lib/server/discord';

export async function GET() {
	const data = await discord();
	const response = await fetch(
		`https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.webp?size=256`
	);

	return new Response(await response.blob());
}
