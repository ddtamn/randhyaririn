<script>
	import Ornamen from './Ornamen.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSolidPlay from 'svelte-icons-pack/fa/FaSolidPlay';
	import FaSolidPause from 'svelte-icons-pack/fa/FaSolidPause';
	import { onMount } from 'svelte';

	let open = false;
	let play = false;
	/**
	 * @type {HTMLElement | null}
	 */
	let audioElement;

	function openCover() {
		open = true;
		play = true;
		// @ts-ignore
		audioElement.play();
	}

	function playPauseAudio() {
		if (play) {
			play = false;
			// @ts-ignore
			audioElement.pause();
		} else {
			play = true;
			// @ts-ignore
			audioElement.play();
		}
	}

	onMount(() => {
		audioElement = document.getElementById('audio');
	});
</script>

<section class="cover {open ? 'hidden' : ''}">
	<Ornamen />
	<p>The Wedding of</p>
	<p class="title">Randhya & Ririn</p>
	<img class="cover-img" src="images/COVER.jpg" alt="cover" />
	<p class="dear">Kepada Yth. <br /> Bapak/Ibu/Saudara/i:</p>
	<p class="guest-name">Nama Tamu</p>
	<button class="open-cover" on:click={openCover}>Buka Undangan</button>
</section>
<audio id="audio">
	<source src="/audio.mp3" type="audio/mp3" />
</audio>
{#if open}
	<div class="audio">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="icon" on:click={playPauseAudio}>
			{#if play}
				<Icon src={FaSolidPause} color="whitesmoke" />
			{:else}
				<Icon src={FaSolidPlay} color="whitesmoke" />
			{/if}
		</div>
	</div>
{/if}

<style>
	.audio {
		position: fixed;
		z-index: 9999;
		bottom: 1rem;
		right: 1rem;
	}

	.icon {
		width: 2rem;
		height: 2rem;
		background-color: #dba400;
		display: grid;
		place-items: center;
		border-radius: 50%;
	}
	.cover {
		position: fixed;
		height: 100vh;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;

		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;

		z-index: 9999;
	}

	.cover.hidden {
		transform: translate(-50%, -100%);
		transition: all 0.3s ease-in-out;
	}

	.cover .title {
		font-family: 'Alex Brush', cursive;
		font-size: 2.5rem;
		font-weight: 600;
		color: #dba400;
		/* text-shadow: 2px 2px 10px #252524; */
	}

	.cover .guest-name {
		color: #dba400;
		font-size: 1.3rem;
		font-weight: bold;
	}

	.cover .cover-img {
		width: 160px;
		height: 160px;
		border-radius: 100%;
		object-fit: cover;
	}

	.cover .open-cover {
		display: inline-block;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		user-select: none;
		padding: 0.375rem 0.75rem;
		font-size: 1rem;
		background-color: #dba400;
		border: none;
		color: whitesmoke;
		border-radius: 50rem;
		cursor: pointer;
	}
</style>
