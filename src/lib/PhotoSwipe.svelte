<script>
import { onMount } from "svelte";
// @ts-ignore
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
/**
	 * @type {string}
	 */
 export let galleryID;
/**
	 * @type {any}
	 */
 export let images;

onMount(() => {
    let lightbox = new PhotoSwipeLightbox({
      bgOpacity: 0.6,
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();})
  </script>

    <div class="flexbin flexbin-margin" id={galleryID}>
    {#each images as image}
    <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.largeURL} alt="" />
          </a>
    {/each}
    </div>


