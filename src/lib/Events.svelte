<script>
	import { onMount } from 'svelte';
	import Ornamen from './Ornamen.svelte';

	const endTime = new Date('February 23, 2023 14:00:00 GMT+0800').getTime();

	/**
	 * @type {number}
	 */
	let days;
	/**
	 * @type {number}
	 */
	let hours;
	/**
	 * @type {number}
	 */
	let minutes;
	/**
	 * @type {number}
	 */
	let seconds;

	/**
	 * @type {string | number | NodeJS.Timeout | undefined}
	 */
	let countdownInterval;

	function countdown() {
		const now = new Date().getTime();
		const remainingTime = endTime - now;

		// Calculate the days, hours, minutes, and seconds remaining
		days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
		hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

		if (remainingTime < 0) {
			clearInterval(countdownInterval);
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		}
	}

	onMount(() => {
		countdownInterval = setInterval(countdown, 1000);
	});
</script>

<section class="events">
	<Ornamen />
	<div class="title">Akad Nikah</div>
	<p class="detail">
		Kamis, 23 Februari 2023 <br /> 14:00 Wita <br /> Estrella Hotel & Conference Center - Luwuk
	</p>
	<div class="title">Resepsi Pernikahan</div>
	<p class="detail">
		Kamis, 23 Februari 2023 <br /> 20:00 Wita - Selesai <br /> Estrella Hotel & Conference Center - Luwuk
	</p>
	<div class="countdown">
		<div class="countdown-item">
			<div class="number">{days}</div>
			<div class="text">Hari</div>
		</div>
		<div class="countdown-item">
			<div class="number">{hours}</div>
			<div class="text">Jam</div>
		</div>
		<div class="countdown-item">
			<div class="number">{minutes}</div>
			<div class="text">Menit</div>
		</div>
		<div class="countdown-item">
			<div class="number">{seconds}</div>
			<div class="text">Detik</div>
		</div>
	</div>
	<button>Save to Calendar</button>
</section>

<style>
	.events {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.title {
		font-family: 'Alex Brush', cursive;
		font-size: 1.8rem;
		font-weight: 600;
		color: #dba400;
	}

	.detail {
		margin-bottom: 3rem;
	}

	.countdown {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		gap: 1rem;
	}
	.countdown-item {
		width: calc(100% / 4);
		background-color: #dba400;
		border-radius: 10px;
		color: whitesmoke;
	}

	button {
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
		margin-top: 2rem;
	}
</style>
