import { env } from '$env/dynamic/private';

let cache = {};
setInterval(
	() => {
		cache = {};
	},
	1000 * 60 * 60
);

export default async function () {
	if (Object.keys(cache).length) return cache;

	const response = await fetch(`https://discord.com/api/users/${env.DISCORD_ID}`, {
		method: 'GET',
		headers: { Authorization: `Bot ${env.DISCORD_TOKEN}` }
	});

	const data = await response.json();
	cache = data;
	return data;
}
