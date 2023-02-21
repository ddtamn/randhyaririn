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
	import { page } from '$app/stores';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import BsQrCodeScan from 'svelte-icons-pack/bs/BsQrCodeScan';
	import supabase from '$lib/supabseClient';
	import Qrcode from 'qrcode';

	let loading = false;

	/**
	 * @type {HTMLCanvasElement}
	 */
	let canvas;
	/**
	 * @type {CanvasRenderingContext2D | null}
	 */
	let ctx;

	onMount(() => {
		checkGuest();
	});

	let showQrCode = false;
	let showIcon = false;
	/**
	 * @type {string}
	 */
	let qrCodesrc;

	/**
	 * @param {any} text
	 */
	async function generateQrCode(text) {
		try {
			const qrCode = await Qrcode.toDataURL(text, {
				width: 800,
				errorCorrectionLevel: 'H'
			});
			return qrCode;
		} catch (error) {
			console.log(error);
		}
	}

	let accessCount = 'satu';

	async function checkGuest() {
		let params = $page.url.searchParams.get('to');
		if (params == 'karyawan & staff bni') {
			accessCount = 'dua';
		}
		try {
			if (params !== null && params !== undefined) {
				let { data, error } = await supabase
					.from('guestsbook')
					.select('*')
					.eq('name', params?.toUpperCase());
				if (data?.length !== 0) {
					setTimeout(() => {
						showQrCode = true;
					}, 8000);
					showIcon = true;
					// @ts-ignore
					qrCodesrc = await generateQrCode(data[0].guest_code);
				}
			}
			setTimeout(() => {
				showQrCode = true;
			}, 8000);
			showIcon = true;
			qrCodesrc = await generateQrCode('rr230323fromonline');
		} catch (error) {
			console.log(error);
			showQrCode = false;
			showIcon = false;
		}
	}

	const downloadQrCode = () => {
		if (showQrCode) {
			loading = true;
			ctx = canvas.getContext('2d');
			canvas.width = 1181;
			canvas.height = 1772;
			let img = new Image();
			img.src = '/assets/TEMPLATE.jpg';
			let qrImage = new Image();
			qrImage.src = qrCodesrc;
			qrImage.width = 800;
			qrImage.height = 800;
			qrImage.onload = () => {
				img.onload = () => {
					// @ts-ignore
					ctx.drawImage(img, 0, 0);
					// @ts-ignore
					ctx.drawImage(
						qrImage,
						(canvas.width - qrImage.width) / 2,
						(canvas.height - qrImage.height) / 2,
						qrImage.width,
						qrImage.height
					);
					download(canvas.toDataURL('image/jpeg', 0.8));
					loading = false;
				};
			};
		}
	};

	/**
	 * @param {URL | RequestInfo} file
	 */
	async function download(file) {
		const response = await fetch(file);
		const blob = await response.blob();
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `KARTU AKSES RESEPSI PERNIKAHAN RANDHYA & RIRIN.png`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		showQrCode = false;
	}
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
	{#if showIcon}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="qrcode-icon" on:click={() => (showQrCode = true)}>
			<Icon src={BsQrCodeScan} color="whitesmoke" />
		</div>
	{/if}

	{#if showQrCode}
		<div class="qrcode-card" id="qrcode-card">
			<div class="content">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="close" on:click={() => (showQrCode = false)}>&#10006</div>
				<h3>KARTU AKSES MASUK</h3>
				<h6>RESEPSI PERNIKAHAN</h6>
				<div class="title">Randhya & Ririn</div>
				<div class="qrcode-image">
					<img src={qrCodesrc} alt="" />
				</div>
				<p>SCAN QR CODE DI ATAS SEBAGAI AKSES MASUK GEDUNG</p>
				<i>Kartu akses ini berlaku untuk {accessCount} orang</i>
				<button on:click={downloadQrCode}>DOWNLOAD KARTU AKSES</button>
				<canvas bind:this={canvas} style="display: none;" />
			</div>
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

	.qrcode-icon {
		position: fixed;
		z-index: 9990;
		bottom: 1rem;
		left: 1rem;
		width: 2rem;
		height: 2rem;
		background-color: #dba400;
		display: grid;
		place-items: center;
		border-radius: 50%;
	}

	.qrcode-card {
		position: fixed;
		z-index: 9990;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background-color: rgba(0, 0, 0, 0.438);
		display: grid;
		place-items: center;
	}

	.qrcode-card .content {
		background-color: whitesmoke;
		width: 95%;
		padding: 2rem;
		border-radius: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
		position: relative;
	}

	.qrcode-card .content .title {
		font-family: 'Alex Brush', cursive;
		font-size: 2.5rem;
		font-weight: 600;
		color: #dba400;
		margin-top: 1rem;
	}

	.qrcode-card .content .qrcode-image img {
		width: 100%;
	}

	.qrcode-card .content button {
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
		border-radius: 15px;
		cursor: pointer;
		margin-top: 1rem;
	}

	.qrcode-card .content .close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		width: 30px;
		height: 30px;
		background-color: #dba400;
		border-radius: 100%;
		color: whitesmoke;
		font-weight: bold;
		display: grid;
		place-items: center;
	}
</style>
