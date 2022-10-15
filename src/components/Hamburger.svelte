<script>
	export let open = false
</script>

<button class="fixed md:top-3 top-3 cursor-pointer mr-4 border-none focus:outline-none z-10" class:open on:click={() => open = !open}>
	<svg class="md:h-10 h-8" viewBox ="0 0 34 24" xmlns="http://www.w3.org/2000/svg">
		<line id="top" x1=2 y1=2  x2=32 y2=2/>
		<line id="middle" x1=2 y1=12 x2=32 y2=12/>
		<line id="bottom" x1=2 y1=22 x2=32 y2=22/>
	</svg>
</button>

<style>
    line {
        stroke: #FFFFFF;
        stroke-linecap: round;
        stroke-width: 3;
        transition: transform 0.3s ease-in-out
    }
    svg {
        transition: transform 0.3s ease-in-out;
    }

    .open svg {
		transform: scale(0.7)
	}

	.open #top {
		transform: translate(6px, 0px) rotate(45deg)
	}

	.open #middle {
		transform: translate(50px);
	}

  .open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg)
	}
</style>


<!-- <li>
	<svg class="h-10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 384.97 384.97"><g><g id="Menu">
		<path fill="#FFFFFF" d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03 C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"/>
		<path fill="#FFFFFF" d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03 S379.58,180.455,372.939,180.455z"/>
		<path fill="#FFFFFF" d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909 c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"/>
	</g></g></svg>
</li> -->