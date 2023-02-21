<script>
	// @ts-nocheck

	import Ornamen from './Ornamen.svelte';
</script>

<section class="map">
	<Ornamen />
	<div class="embed">
		<!-- svelte-ignore a11y-missing-attribute -->
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2142029141473!2d122.79077731525429!3d-0.9970736356615164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d86a143afd18541%3A0xd1052911d7aedda4!2sEstrella%20Hotel%20%26%20Conference%20Center%20-%20Luwuk!5e0!3m2!1sid!2sid!4v1676395996400!5m2!1sid!2sid"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		/>
		<button>Arahkan ke Lokasi</button>
	</div>
</section>

<style>
	.map {
		min-height: 100vh;
	}

	.embed {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		z-index: 100;
		width: 100%;
		height: 500px;
		left: 0;
		top: 10rem;
		padding: 1rem;
	}

	.embed iframe {
		width: 100%;
		height: 100%;
		border-radius: 15px;
		border: 3px solid #dba400;
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
