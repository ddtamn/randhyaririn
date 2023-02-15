<script>
	import Ornamen from "./Ornamen.svelte";

</script>
<section class="events">
  <Ornamen/>
  <div class="title">Akad Nikah</div>
  <p class="detail">Kamis, 23 Februari 2023 <br> 15:15 Wita <br> Estrella Hotel & Conference Center - Luwuk</p>
  <div class="title">Resepsi Pernikahan</div>
  <p class="detail">Kamis, 23 Februari 2023 <br> 20:00 Wita - Selesai <br> Estrella Hotel & Conference Center - Luwuk</p>
  <div class="countdown">
    <div class="countdown-item">
      <div class="number">15</div>
      <div class="text">Hari</div>
    </div>
    <div class="countdown-item">
      <div class="number">15</div>
      <div class="text">Jam</div>
    </div>
    <div class="countdown-item">
      <div class="number">15</div>
      <div class="text">Menit</div>
    </div>
    <div class="countdown-item">
      <div class="number">15</div>
      <div class="text">Detik</div>
    </div>
  </div>
  <button>Save to Calendar</button>
</section>


<style>
  .events {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title {
    font-family: 'Alex Brush', cursive;
    font-size: 1.8rem;
    font-weight: 600;
    color: #dba400;
  }

  .detail {
    margin-bottom: 3rem;
  }

  .countdown {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
}
  .countdown-item {
    width: calc(100% / 4);
    background-color: #dba400;
    border-radius: 10px;
    color: whitesmoke;
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