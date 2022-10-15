<script>
    import { onMount } from 'svelte';
	import Nav from '../components/Nav.svelte';
	export let segment;

	let ready = false
	onMount(() => {ready=true})
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bebas%20Neue">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap">
<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.font-bebas {
		font-family: 'Bebas Neue';
	}
	.font-lato {
		font-family: 'Lato';
	}
	.screen-height {
		height: calc(100vh - 3.5rem);
		height: calc(-webkit-fill-available - 3.5rem);
	}
	@media (min-width: 768px) {
		.screen-height {
			height: calc(100vh - 4rem);
			height: calc(-webkit-fill-available - 4rem);
		}
	}

	@media (min-width: 1024px) {
		.screen-height {
			height: calc(100vh - 4.5rem);
			height: calc(-webkit-fill-available - 4.5rem);
		}
	}

</style>

<body>
	{#if ready}
	<Nav {segment}/>

	<main>
		<slot></slot>
	</main>
	{/if}
</body>
<!-- TODO: add footer
w/ links to Github, linkedin (,etc?)
-->