<script>
	import Closing from '$lib/Closing.svelte';
import Galleries from '$lib/Galleries.svelte';
  import Story from '$lib/Story.svelte';
	import supabase  from '$lib/supabseClient';
	import Wallet from '$lib/Wallet.svelte';
	import Wish from '$lib/Wish.svelte';
	import { onMount } from 'svelte';
  import Brides from '../lib/Brides.svelte';
  import Cover from '../lib/Cover.svelte';
	import Events from '../lib/Events.svelte';
	import Map from '../lib/Map.svelte';
	import Opening from '../lib/Opening.svelte';
	import Ornamen from '../lib/Ornamen.svelte';
  import '../style.css'


 

</script>

<main>
  <Cover/>
  <Opening/>
  <section class="quotes">
    <p>Every love story is beautiful, but ours is the best one. I loved her since the first time I saw her. My mother told me to pick the very best one, and I did. True love stories never have endings.</p>
  </section>
  <Brides/>
  <Events/>
  <Map/>
  <Story/>
  <Galleries/>
  <Wallet/>
  <Wish/>
  <Closing/>
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

  

</style>