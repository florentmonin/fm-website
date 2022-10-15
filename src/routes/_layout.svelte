<script>
	import Nav from '../components/Nav.svelte';
	export let segment;

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
</style>

<body>
	<Nav {segment}/>

	<main>
		<slot></slot>
	</main>
</body>
<!-- TODO: add footer
w/ links to Github, linkedin (,etc?)
-->