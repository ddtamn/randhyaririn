<script>
	import Closing from '../lib/Closing.svelte';
	import Galleries from '../lib/Galleries.svelte';
	import Wallet from '../lib/Wallet.svelte';
	import Wish from '../lib/Wish.svelte';
	import { onMount } from 'svelte';
	import Brides from '../lib/Brides.svelte';
	import Cover from '../lib/Cover.svelte';
	import Events from '../lib/Events.svelte';
	import Map from '../lib/Map.svelte';
	import Opening from '../lib/Opening.svelte';
	// import Ornamen from '../lib/Ornamen.svelte';
	import '../style.css';
	import Preloader from '$lib/Preloader.svelte';

	let loading = true;

	onMount(() => {
		loading = false;
	});
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Randhya & Ririn | DINVITE</title>
	<meta name="title" content="Randhya & Ririn | DINVITE" />
	<meta
		name="description"
		content="The Wedding of Randhya & Ririn - Kamis, 23 Februari 2023 at Hotel Estrella & Conference Luwuk Banggai | dinvite.online"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/images/COVER.JPG" />
	<meta property="og:title" content="Randhya & Ririn | DINVITE" />
	<meta
		property="og:description"
		content="The Wedding of Randhya & Ririn - Kamis, 23 Februari 2023 at Hotel Estrella & Conference Luwuk Banggai | dinvite.online"
	/>
	<meta property="og:image" content="/images/COVER.JPG" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="/images/COVER.JPG" />
	<meta property="twitter:title" content="Randhya & Ririn | DINVITE" />
	<meta
		property="twitter:description"
		content="The Wedding of Randhya & Ririn - Kamis, 23 Februari 2023 at Hotel Estrella & Conference Luwuk Banggai | dinvite.online"
	/>
	<meta property="twitter:image" content="/images/COVER.JPG" />
</svelte:head>
<main>
	{#if loading}
		<div class="loader">
			<Preloader />
		</div>
	{/if}
	<Cover />
	<Opening />
	<section class="quotes">
		<p>
			Every love story is beautiful, but ours is the best one. I loved her since the first time I
			saw her. My mother told me to pick the very best one, and I did. True love stories never have
			endings.
		</p>
	</section>
	<Brides />
	<Events />
	<Map />
	<Galleries />
	<Wallet />
	<Wish />
	<Closing />
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.quotes {
		text-align: center;
	}

	.loader {
		position: fixed;
		z-index: 99999;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background-color: #f1f2f3;
		display: grid;
		place-items: center;
	}
</style>
