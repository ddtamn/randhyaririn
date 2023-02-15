<script>

	import Ornamen from "./Ornamen.svelte";
  import '../flexbin.css'
  // import PhotoSwipeGallery from 'svelte-photoswipe'
  import PhotoSwipe from "./PhotoSwipe.svelte";

 const images = [
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
              width: 1875,
              height: 2500,
            },
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
              width: 1669,
              height: 2500,
            },
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
              width: 2500,
              height: 1666,
            },
          ]

</script>
<section class="galleries">
  <Ornamen/>
  <div class="title">Our Gallery</div>
  <div class="container" >
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