import { siteViews, tabsData } from '$lib';
import discord from '$lib/server/discord';
import { get } from 'svelte/store';

export async function load() {
	siteViews.set(get(siteViews) + 1);

	const discordData = await discord();

	return {
		discord: discordData,
		views: get(siteViews),
		tabs: get(tabsData)
	};
}
