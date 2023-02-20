<script>
	import Ornamen from './Ornamen.svelte';
</script>

<section class="brides">
	<Ornamen />
	<div class="title">Assalamualaikum wr. wb.</div>
	<p class="text">
		Dengan memohon Rahmat dan Ridho Allah SWT kami bermaksud untuk mengundang saudara/i untuk
		menghadiri acara pernikahan putra - putri kami :
	</p>
	<div class="picture"><img src="/images/RANDHYA.jpg" alt="" /></div>
	<p class="name">Randhya Sakthika Putra</p>
	<p class="detail">
		Putra ke tiga dari <br /> <span> Bpk. Akmal Thaib & Ibu Mursida (Alm) </span>
	</p>
	<p style="color: #dba400; font-size: 8rem; font-family: Alex Brush, cursive">&</p>
	<div class="picture">
		<img src="/images/RIRIN.jpg" alt="" />
	</div>
	<p class="name">Ririn Indriani Laimu</p>
	<p class="detail">
		Putri pertama dari <br /> <span> Bpk. Sainuddin Laimu & Ibu Juwita Andriani </span>
	</p>
	<a
		style="text-decoration: none; display: flex;"
		href="https://www.instagram.com/ririnindriiiany/"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-brand-instagram"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="#dba400"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<rect x="4" y="4" width="16" height="16" rx="4" />
			<circle cx="12" cy="12" r="3" />
			<line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
		</svg>
		<p style="color: #dba400;">@ririnindriiiany</p>
	</a>
</section>

<style>
	.brides {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
		padding-top: 8rem;
		padding-bottom: 3rem;
	}

	.title {
		font-family: 'Alex Brush', cursive;
		font-size: 2.5rem;
		font-weight: 600;
		color: #dba400;
		/* color: #dba400; */
	}

	.text {
		margin-bottom: 2rem;
	}

	.picture {
		width: 200px;
		height: 200px;
		border-radius: 100%;
		/* overflow: hidden; */
		position: relative;
	}

	.picture::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100%;
		width: calc(100% + 12px);
		height: calc(100% + 12px);
		border-radius: inherit;
		transform: translate(-50%, -50%);
		border: 2px solid #dba400;
		background-color: transparent;
	}

	.picture img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
	}

	.name {
		font-family: 'Alex Brush', cursive;
		font-size: 1.5rem;
		font-weight: 600;
		color: #dba400;
	}

	span {
		font-weight: bold;
		color: #292929;
	}
</style>
