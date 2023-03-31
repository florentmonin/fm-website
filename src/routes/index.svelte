<script>

    import MainName from "../components/MainName.svelte";
    import Whoami from "../components/Whoami.svelte";
	let name = "Florent Monin"
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<div class="flex lg:flex-row flex-col lg:place-content-center bg-sky">
	<MainName/>
	<Whoami/>
</div>


<div class="flex relative bg-sky h-screen">
	<!-- <div
		class="bg-stone z-10 left-0 opacity-50 absolute screen-height lg:w-1/2 2xl:ml-24 lg:ml-12 w-full"></div>
	<div
		class="bg-stone z-20 left-0 opacity-50 absolute screen-height lg:w-1/2 2xl:ml-16 lg:ml-8 w-11/12"></div>
	<div
		class="bg-stone z-30 left-0 opacity-50 absolute screen-height lg:w-1/2 2xl:ml-8 lg:ml-4 w-10/12"></div>
	<div
		class="bg-stone z-40 absolute left-0 lg:w-1/2 w-9/12 screen-height flex items-center justify-center text-white">
		<div class="text-9xl text-cocoa font-bebas pl-20 py-10">
			Skills
		</div>
	</div> -->
	<div class="text-9xl text-stone-dark font-bebas pl-20 py-20">
			Skills
	</div>
</div>
