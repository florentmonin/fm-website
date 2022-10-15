<script>

    import MainName from "../components/MainName.svelte";
	let name = "Florent Monin"
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<div class="flex lg:flex-row flex-col lg:place-content-center bg-sky">
	<MainName/>
</div>
