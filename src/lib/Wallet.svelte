<script>
	import Ornamen from './Ornamen.svelte';

	function copyToClipboard() {
		const textToCopy = '0345381197';
		const textarea = document.createElement('textarea');
		textarea.value = textToCopy;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		document.body.removeChild(textarea);
		alert('Copied to Clipboard!');
	}
</script>

<section class="wallet">
	<Ornamen />
	<div class="title">Wedding Gift</div>
	<p class="text">
		Blessings and the presences from all of friends and relatives are more than enough for us.
		However, without reducing our respect, if you want to give a wedding gift, we attach the
		following, with the aim of making it easier for you, Thanks in advance.
	</p>
	<div class="content">
		<div class="image"><img src="/qris.jpg" alt="" /></div>
		<hr />
		<br />
		<h4>BANK BNI (009)</h4>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<p>Account Number <b>0345381197</b> <span on:click={copyToClipboard}>&#128203;</span></p>
		<p>a/n RIRIN INDRIANI LAIMU</p>
	</div>
</section>

<style>
	.wallet {
		min-height: 100vh;
		padding: 1rem;
		padding-top: 8rem;
	}

	.title {
		font-family: 'Alex Brush', cursive;
		font-size: 1.8rem;
		font-weight: 600;
		color: #dba400;
	}

	.content {
		background-color: white;
		padding: 1rem;
		margin-top: 1rem;
		z-index: 999;
		position: relative;
		border-radius: 15px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	hr {
		width: 100%;
	}

	.content .image img {
		width: 350px;
		z-index: 999;
	}
</style>
