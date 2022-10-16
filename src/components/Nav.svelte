<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import Hamburger from './Hamburger.svelte';
    import Menu from './Menu.svelte';
    import SideMenu from './SideMenu.svelte';
	export let segment;
	export let open = false;
	let scrollHideSidebar = false;
	let atTopOfPage = true
	$: hideSidebar = !open && scrollHideSidebar && !atTopOfPage
	let lastScrollY = 0
	function controlNavbar () {
		if (typeof window !== 'undefined') {
			atTopOfPage = window.scrollY < 10
			if (window.scrollY > lastScrollY + 10) {
				// if scroll down hide the navbar
				scrollHideSidebar = true;
			}

			if (window.scrollY < lastScrollY - 10) {
				// if scroll down hide the navbar
				scrollHideSidebar = false;
			}
			// remember current page location to use in the next move
			lastScrollY = window.scrollY;
		}
	};

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', controlNavbar);

			// cleanup function
			return () => {
				window.removeEventListener('scroll', controlNavbar);
			};
		}
	});

</script>

<style>
	#navbar {
		transition: transform 0.3s ease-in-out
	}
	#navbar.hidesidebar {
		transform: translateY(-100%);
	}
	@media (min-width: 1024px) {
		#navbar.hidesidebar {
			transform: translateY(0);
		}
	}
</style>


<nav id="navbar" in:fade={{y:-100, duration: 500}}
	class="sticky w-full z-50 top-0
	bg-stone-dark text-white font-lato font-extrabold
	"
	class:hidesidebar={hideSidebar}
	>
	<div class="lg:flex hidden h-18 flex-row space-x-3 justify-end p-3 lg:text-2xl items-center">
		<Menu bind:segment/>
	</div>
	<div class="lg:hidden flex flex-row space-x-3 justify-end p-3 md:h-16 h-14 items-center">
		<Hamburger bind:open/>
		<SideMenu bind:segment bind:open/>
	</div>
</nav>
