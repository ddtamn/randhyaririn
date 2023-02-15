<script>
	import Ornamen from "./Ornamen.svelte";

</script>
<section class="closing">
  <Ornamen/>
  <p class="text">Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kedua mempelai.</p>
  <p class="date">Kamis, 23 Februari 2023</p>
  <p class="title">Randhya & Ririn</p>
  <div class="powered">
    <p>Powered by</p>
    <a href="https://dinvite.online">
      <img src="https://s3.ap-southeast-1.wasabisys.com/ajakan/photo/mitra_logo/16678378513121.png" alt="">
    </a>
  </div>
</section>


<style>
  .closing {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .title {
    font-family: 'Alex Brush', cursive;
    font-size: 2.5rem;
    font-weight: 600;
    color: #dba400;
    margin-bottom: 15rem;
  }

  .date {
    font-weight: bold;
    font-size: smaller;
}

.powered p {
  font-style: italic;
}
.powered img  {
  width: 150px;
}
</style>

