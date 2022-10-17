<script>
    import Menu from './Menu.svelte';
	export let segment;
	export let open = false;
</script>

<div id="sidebar" class="fixed top-0 right-0 z-0 w-auto h-screen bg-stone-dark opacity-80 md:pt-20 pt-16 space-y-2 text-xl px-6" class:open>
	<Menu bind:segment/>
</div>

<style>
	#sidebar.open {
		transform: translateX(0%);
	}
    #sidebar {
		transform: translateX(120%);
		transition: transform 0.3s ease-in-out;
		box-shadow: -0.5rem 0 1rem 1rem rgba(52, 62, 70, 1);
	}
</style>


<!-- <li>
	<svg class="h-10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 384.97 384.97"><g><g id="Menu">
		<path fill="#FFFFFF" d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03 C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"/>
		<path fill="#FFFFFF" d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03 S379.58,180.455,372.939,180.455z"/>
		<path fill="#FFFFFF" d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909 c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"/>
	</g></g></svg>
</li> -->