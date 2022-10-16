<script>
	import { fly } from "svelte/transition";
	import { onMount } from 'svelte';

  let ready = false;
  onMount(() => ready = true);
</script>

<style>
	.name {
		font-size: 6rem;
		line-height: 6rem;
	}
	@media(min-width: 640px) {
		.name {
			font-size: 10rem;
			line-height: 10rem;
		}
	}
	@media(min-width: 768px) {
		.name {
			font-size: 12rem;
			line-height: 12rem;
		}
	}
	@media(min-width: 1024px) {
		.name {
			font-size: 8rem;
			line-height: 8rem;
		}
	}
	@media(min-width: 1280px) {
		.name {
			font-size: 10rem;
			line-height: 10rem;
		}
	}

	@media(min-width: 1536px) {
		.name {
			font-size: 12rem;
			line-height: 12rem;
		}
	}
	.shadow-name {
		box-shadow: -3rem -1rem 4rem 4rem rgb(93, 112, 127)
	}

	.fold-1 {
		height: calc(var(--screen-height) + 25vw);
		width: 100%;
	}

	@media (min-width: 1024px) {
		.fold-1 {
			height: calc(var(--screen-height) + 3rem);
			width: calc(50% + 3rem);
		}
	}

	@media (min-width: 1536px) {
		.fold-1 {
			height: calc(var(--screen-height) + 6rem);
			width: calc(50% + 6rem);
		}
	}

	.fold-2 {
		height: calc(var(--screen-height) + 16.66666vw);
		width: 91.666667%;
	}
	@media (min-width: 1024px) {
		.fold-2 {
			height: calc(var(--screen-height) + 2rem);
			width: calc(50% + 2rem);
		}
	}

	@media (min-width: 1536px) {
		.fold-2 {
			height: calc(var(--screen-height) + 4rem);
			width: calc(50% + 4rem);
		}
	}

	.fold-3 {
		height: calc(var(--screen-height) + 8.33333vw);
		width: 83.333333%;
	}
	@media (min-width: 1024px) {
		.fold-3 {
			height: calc(var(--screen-height) + 1rem);
			width: calc(50% + 1rem);
		}
	}

	@media (min-width: 1536px) {
		.fold-3 {
			height: calc(var(--screen-height) + 2rem);
			width: calc(50% + 2rem);
		}
	}

</style>

<div id="mainName" class="screen-height lg:w-1/2 w-full left-0">
	{#if ready}
	<div
		id="fold1"
		in:fly={{ x: -1000, duration: 1000 }}
		class="ease-out bg-stone z-10 left-0 opacity-50 absolute fold-1 rounded-br-xl shadow-name"></div>
	<div
		id="fold2"
		in:fly={{ x: -1000, duration: 1200 }}
		class="ease-out bg-stone z-20 left-0 opacity-50 absolute fold-2 rounded-br-xl"></div>
	<div
		id="fold3"
		in:fly={{ x: -1000, duration: 1400 }}
		class="ease-out bg-stone z-30 left-0 opacity-50 absolute fold-3 rounded-br-xl"></div>
	<div
		id="fold4"
		in:fly={{ x: -1000, duration: 1600 }}
		class="ease-out bg-stone z-40 absolute left-0 lg:w-1/2 w-9/12 screen-height flex items-center justify-center text-white rounded-br-xl">
		<div class="name font-bebas">
			<b>Florent<br>Monin</b>
		</div>
	</div>
	{/if}
</div>
