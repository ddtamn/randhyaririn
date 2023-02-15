<script>
	import Ornamen from "./Ornamen.svelte";
  import '../flexbin.css'
  import PhotoSwipeGallery from 'svelte-photoswipe'

  const images = [
    {
      src: "https://placebear.com/1920/1080",
      height: 1080,
      width: 1920,
      alt: "Test",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      src: "https://placebear.com/600/400",
      width: 600,
      height: 400,
      description: '<a href="https://google.com">Google</a>'
    },
    {
      src: "https://placebear.com/400/400",
      width: 4000,
      height: 4000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit2",
      alt: "Random"
    },
  ]

</script>
<section class="galleries">
  <Ornamen/>
  <div class="title">Our Gallery</div>
  <div class="container">
      <PhotoSwipeGallery {images} styling={"flex"} />
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