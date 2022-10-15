<script>
	import Nav from '../components/Nav.svelte';
	export let segment;

</script>
<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

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