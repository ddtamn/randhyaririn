<script>
	import Ornamen from "./Ornamen.svelte";
  let open = false;
</script>

 <section class="cover {open ? 'hidden' : ''}">
    <Ornamen/>
    
    <p>The Wedding of</p>
    <p class="title">Randhya & Ririn</p>
    <img class="cover-img" src="https://dinvite.online/themes/assets/demo/preview12/4.jpg" alt="cover">
    <p class="dear">Kepada Yth. <br> Bapak/Ibu/Saudara/i:</p>
    <p class="guest-name">Nama Tamu</p>
    <button class="open-cover" on:click={() => open = true}>Buka Undangan</button>
  </section>


  <style>
    .cover {
    position: fixed;
    height: 100vh;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    z-index: 9999;

    
  }

  .cover.hidden {
    transform: translate(-50%, -100%);
    transition: all 0.3s ease-in-out;
  }

 

  .cover .title {
    font-family: 'Alex Brush', cursive;
    font-size: 2.5rem;
    font-weight: 600;
    color: #dba400;
    /* text-shadow: 2px 2px 10px #252524; */
  }

  .cover .guest-name {
    color: #dba400;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .cover .cover-img {
    width: 160px;
    height: 160px;
    border-radius: 100%;
    object-fit: cover;
  }


  .cover .open-cover {
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
  }

  </style>