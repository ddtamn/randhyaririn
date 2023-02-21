<script>
	import Ornamen from './Ornamen.svelte';
</script>

<section class="opening">
	<Ornamen />
	<p>The Wedding of</p>
	<p class="title">Randhya & Ririn</p>
	<p class="date">Kamis, 23 Februari 2023</p>
	<div class="frame" style="background-image: url('gallery/KTN07436.jpg');" />
</section>

<style>
	.opening {
		min-height: 100vh;
		display: flex;
		justify-content: start;
		align-items: center;
		flex-direction: column;
		padding-top: 8rem;
	}

	.frame {
		position: absolute;
		bottom: 0;
		height: 70%;
		width: 80%;
		border-top-left-radius: 250px;
		border-top-right-radius: 250px;
		/* background-image: url('images/KTN01050.jpg'); */
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.title {
		font-family: 'Alex Brush', cursive;
		font-size: 2.5rem;
		font-weight: 600;
		color: #dba400;
	}
</style>
