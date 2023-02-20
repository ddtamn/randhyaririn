<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import Ornamen from './Ornamen.svelte';
	import supabase from './supabseClient';

	import moment from 'moment';

	/**
	 * @type {any[] | null}
	 */
	let comments = [];

	let name;
	let comment;
	let modalName;
	let form;
	let modal = false;

	onMount(async () => {
		await getAllComments();
	});

	const getAllComments = async () => {
		try {
			let { data, error } = await supabase
				.from('comments')
				.select('*')
				.order('id', { ascending: false });
			comments = data;
		} catch (error) {
			console.log(error);
		}
	};

	const insertComment = async (event) => {
		console.log(name);
		if (name !== undefined && comment !== undefined) {
			event.target.disabled = true;
			modalName = name;
			try {
				const { data, error } = await supabase.from('comments').insert([{ name, comment }]);
				if (error) {
					throw new Error();
				}
				await getAllComments();
				name = undefined;
				comment = undefined;
				form.reset();
				event.target.removeAttribute('disabled');
				modal = true;
			} catch (error) {
				console.log(error);
				alert('Something went wrong, Please try again or refresh your browser');
			}
		}
	};

	const relativeTime = (timestamp) => {
		return moment(timestamp).fromNow();
	};
</script>

<section class="wish">
	<Ornamen />
	<div class="title">Wedding Wish</div>
	<form bind:this={form}>
		<div class="form-group">
			<input
				type="text"
				placeholder="Name"
				name="guest-name"
				bind:value={name}
				class="form-control"
				autocomplete="none"
				required
			/>
		</div>
		<div class="form-group">
			<textarea
				class="form-control"
				rows="1"
				name="comment"
				bind:value={comment}
				placeholder="Give your wish..."
				required
			/>
		</div>
		<button on:click|preventDefault={insertComment}>Send</button>
	</form>
	<div class="comments">
		<!-- <div class="comment">
      <div class="name">Dinvite &#10004;</div>
      <p class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eaque voluptate dolorum officiis non amet incidunt sed eos distinctio atque fugit tempora officia, aut id itaque aperiam laborum adipisci voluptates.</p>
      <p class="date">15 Februrari 2022, 02:18</p>
    </div> -->

		{#each comments as comment}
			<div class="comment">
				<div class="name">{comment.name}</div>
				<p class="text">{comment.comment}</p>
				<p class="date">{relativeTime(comment.created_at)}</p>
			</div>
		{/each}
	</div>
	{#if modal}
		<div class="modal">
			<div class="content">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="close" on:click={() => ((modal = false), (modalName = undefined))}>&#10005</div>
				<p>Terima kasih <span>{modalName}</span> sudah memberikan ucapan & do'a restu</p>
			</div>
		</div>
	{/if}
</section>

<style>
	.wish {
		min-height: 100vh;
		padding-top: 8rem;
	}

	.modal {
		position: fixed;
		height: 100vh;
		width: 100vw;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #1111116e;
		z-index: 9999;
		padding: 1rem;
	}

	.modal .content {
		background-color: whitesmoke;
		padding: 1rem;
		border-radius: 12px;
		position: relative;
	}

	.modal .content .close {
		position: absolute;
		top: -15px;
		right: -10px;
		border-radius: 99999px;
		background-color: #dba400;
		/* padding: 0.3rem; */
		height: 30px;
		width: 30px;
		display: grid;
		place-items: center;
		color: whitesmoke;
	}

	.modal p span {
		color: #dba400;
		font-weight: bold;
	}

	.title {
		font-family: 'Alex Brush', cursive;
		font-size: 2.5rem;
		font-weight: 600;
		color: #dba400;
		margin-bottom: 1.5rem;
	}

	form {
		position: relative;
		z-index: 999;
		display: flex;
		flex-direction: column;
	}

	.form-group {
		margin-bottom: 0.7em;
	}

	.form-control {
		appearance: none;
		display: block;
		width: 100%;
		padding: 10px;
		outline: none;
		border-radius: 7px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		font-weight: 500;
		background: #fff;
		cursor: text;
		font-family: inherit;
	}

	textarea {
		resize: none;
		min-height: 100px;
		width: 100%;
	}

	button {
		background-color: #dba400;
		color: whitesmoke;
		padding: 8px 20px;
		border-radius: 5px;
		outline: none;
		border: none;
		cursor: pointer;
	}

	.comments {
		margin-top: 1rem;
		text-align: left;
		z-index: 999;
		position: relative;
		max-height: 50rem;
		overflow: hidden;
		overflow-y: scroll;
		padding-inline: 0.5rem;
	}

	.comments::-webkit-scrollbar {
		width: 5px;
	}

	.comments::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	.comments::-webkit-scrollbar-thumb {
		background: #dba400;
	}

	.comment {
		margin-bottom: 1rem;
		background-color: whitesmoke;
		padding: 1.5rem;
		border-radius: 10px;
	}

	.name {
		font-size: 1.3rem;
		font-weight: 600;
		color: #dba400;
		margin-bottom: 0.5rem;
	}

	.date {
		font-size: 0.8rem;
		margin-top: 1rem;
	}
</style>
