<script>

	import Ornamen from "./Ornamen.svelte";
  import '../flexbin.css'
  // import PhotoSwipeGallery from 'svelte-photoswipe'
  import PhotoSwipe from "./PhotoSwipe.svelte";

 const images = [
            {
              largeURL:
                'https://dinvite.online/themes/assets/demo/preview12/4.jpg',
              thumbnailURL:
                'https://dinvite.online/themes/assets/demo/preview12/4.jpg',
              width: 1080,
              height: 1350,
            },
            {
              largeURL:
                'https://dinvite.online/themes/assets/demo/preview12/5.jpg',
              thumbnailURL:
                'https://dinvite.online/themes/assets/demo/preview12/5.jpg',
              width: 1080,
              height: 1350,
            },
            {
              largeURL:
                'https://dinvite.online/themes/assets/demo/preview12/6.jpg',
              thumbnailURL:
                'https://dinvite.online/themes/assets/demo/preview12/6.jpg',
              width: 1080,
              height: 1349,
            },
            {
              largeURL:
                'https://dinvite.online/themes/assets/demo/preview12/1.jpg',
              thumbnailURL:
                'https://dinvite.online/themes/assets/demo/preview12/1.jpg',
              width: 1080,
              height: 1350,
            },
            {
              largeURL:
                'https://dinvite.online/themes/assets/demo/preview12/8.jpg',
              thumbnailURL:
                'https://dinvite.online/themes/assets/demo/preview12/8.jpg',
              width: 1080,
              height: 1350,
            },
            {
              largeURL:
                'https://dinvite.online/themes/assets/demo/preview12/3.jpg',
              thumbnailURL:
                'https://dinvite.online/themes/assets/demo/preview12/3.jpg',
              width: 1080,
              height: 1350,
            },
            {
              largeURL:
                'https://dinvite.online/themes/assets/demo/preview12/2.jpg',
              thumbnailURL:
                'https://dinvite.online/themes/assets/demo/preview12/2.jpg',
              width: 1080,
              height: 1500,
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