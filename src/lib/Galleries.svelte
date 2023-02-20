<script>
	import Ornamen from './Ornamen.svelte';
	import '../flexbin.css';
	// import PhotoSwipeGallery from 'svelte-photoswipe'
	import PhotoSwipe from './PhotoSwipe.svelte';

	let fileName = 'KTN';

	const images = [
		{
			largeURL: `gallery/${fileName}00043.jpg`,
			thumbnailURL: `${fileName}00043.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}00071.jpg`,
			thumbnailURL: `${fileName}00071.jpg`,
			width: 7008,
			height: 4672
		},
		{
			largeURL: `gallery/${fileName}00085.jpg`,
			thumbnailURL: `${fileName}00085.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}00107.jpg`,
			thumbnailURL: `${fileName}00107.jpg`,
			width: 7008,
			height: 4672
		},
		{
			largeURL: `gallery/${fileName}00142.jpg`,
			thumbnailURL: `${fileName}00142.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}00189.jpg`,
			thumbnailURL: `${fileName}00189.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}00244.jpg`,
			thumbnailURL: `${fileName}00244.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}00379.jpg`,
			thumbnailURL: `${fileName}00379.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}00515.jpg`,
			thumbnailURL: `${fileName}00515.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}00529.jpg`,
			thumbnailURL: `${fileName}00529.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}00563.jpg`,
			thumbnailURL: `${fileName}00563.jpg`,
			width: 7008,
			height: 4672
		},
		{
			largeURL: `gallery/${fileName}00595.jpg`,
			thumbnailURL: `${fileName}00595.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}00672.jpg`,
			thumbnailURL: `${fileName}00672.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}00703.jpg`,
			thumbnailURL: `${fileName}00703.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}00724.jpg`,
			thumbnailURL: `${fileName}00724.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}00791.jpg`,
			thumbnailURL: `${fileName}00791.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}01050.jpg`,
			thumbnailURL: `${fileName}01050.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}07280.jpg`,
			thumbnailURL: `${fileName}07280.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}07289.jpg`,
			thumbnailURL: `${fileName}07289.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}07310.jpg`,
			thumbnailURL: `${fileName}07310.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}07431.jpg`,
			thumbnailURL: `${fileName}07431.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}07439.jpg`,
			thumbnailURL: `${fileName}07439.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}07442.jpg`,
			thumbnailURL: `${fileName}07442.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}07525.jpg`,
			thumbnailURL: `${fileName}07525.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}07654.jpg`,
			thumbnailURL: `${fileName}07654.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}09562.jpg`,
			thumbnailURL: `${fileName}09562.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}09574.jpg`,
			thumbnailURL: `${fileName}09574.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}09599.jpg`,
			thumbnailURL: `${fileName}09599.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}09602.jpg`,
			thumbnailURL: `${fileName}09602.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}09639.jpg`,
			thumbnailURL: `${fileName}09639.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}09650.jpg`,
			thumbnailURL: `${fileName}09650.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}09698.jpg`,
			thumbnailURL: `${fileName}09698.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}09704.jpg`,
			thumbnailURL: `${fileName}09704.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}09708.jpg`,
			thumbnailURL: `${fileName}09708.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}09975.jpg`,
			thumbnailURL: `${fileName}09975.jpg`,
			width: 4672,
			height: 7008
		},
		{
			largeURL: `gallery/${fileName}09995.jpg`,
			thumbnailURL: `${fileName}09995.jpg`,
			width: 4672,
			height: 7008
		}
	];
</script>

<section class="galleries">
	<Ornamen />
	<div class="title">Our Gallery</div>
	<div class="container">
		<PhotoSwipe galleryID="my-test-gallery" {images} />
	</div>
</section>

<style>
	.galleries {
		min-height: 100vh;
		padding-top: 8rem;
	}

	.title {
		font-family: 'Alex Brush', cursive;
		font-size: 1.8rem;
		font-weight: 600;
		color: #dba400;
	}

	.container {
		margin-top: 2rem;
	}
</style>
