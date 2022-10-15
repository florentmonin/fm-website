<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import Hamburger from './Hamburger.svelte';
    import Menu from './Menu.svelte';
    import SideMenu from './SideMenu.svelte';
	export let segment;
	export let open = false;

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

</script>

<style>
	#navbar {
		transform: translateY(0%);
		transition: transform 0.3s ease-in-out
	}
	#navbar.hiddensidebar {
		transform: translateY(-100%);
	}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>

<nav id="navbar" in:fade={{y:-100, duration: 500}}
	class="sticky w-full z-50 top-0
	bg-stone-dark text-white font-lato font-extrabold
	overflow-x-hidden"
	>
	<div class="lg:flex hidden h-18 flex-row space-x-3 justify-end p-3 lg:text-2xl items-center">
		<Menu bind:segment/>
	</div>
	<div class="lg:hidden flex flex-row space-x-3 justify-end p-3 md:h-16 h-14 items-center">
		<Hamburger bind:open/>
		<SideMenu bind:segment bind:open/>
	</div>
</nav>
