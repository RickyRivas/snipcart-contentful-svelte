<script>
	import { browser } from '$app/env';
</script>

<svelte:head>
	{#if browser}
		<script
			src="https://cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js"
			defer></script>
	{/if}
</svelte:head>

<slot />
