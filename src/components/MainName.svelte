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

</style>

<div id="mainName" class="screen-height lg:w-1/2 w-full left-0">
	{#if ready}
	<div
		id="fold1"
		in:fly={{ x: -1000, duration: 1000 }}
		class="ease-out bg-stone z-10 left-0 opacity-50 absolute screen-height lg:w-1/2 2xl:ml-24 lg:ml-12 w-full"></div>
	<div
		id="fold2"
		in:fly={{ x: -1000, duration: 1200 }}
		class="ease-out bg-stone z-20 left-0 opacity-50 absolute screen-height lg:w-1/2 2xl:ml-16 lg:ml-8 w-11/12"></div>
	<div
		id="fold3"
		in:fly={{ x: -1000, duration: 1400 }}
		class="ease-out bg-stone z-30 left-0 opacity-50 absolute screen-height lg:w-1/2 2xl:ml-8 lg:ml-4 w-10/12"></div>
	<div
		id="fold4"
		in:fly={{ x: -1000, duration: 1600 }}
		class="ease-out bg-stone z-40 absolute left-0 lg:w-1/2 w-9/12 screen-height flex items-center justify-center text-white">
		<div class="name font-bebas">
			<b>Florent<br>Monin</b>
		</div>
	</div>
	{/if}
</div>
