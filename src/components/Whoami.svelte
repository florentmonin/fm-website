<script>
    const CentersOfInterest = [
        "Data science",
        "Software engineering",
        "Traveling",
        "Mathematics",
        "Machine learning",
        "Algorithms",
        "Science",
        "Natural language processing",
        "Languages",
        "Music",
        "Engineering",
        "Computer science",
        "Learning",
        "Cooking",
    ];
    let wordSizes = {
        "Data science": { w: 0, h: 0 },
        "Software engineering": { w: 0, h: 0 },
        "Traveling": { w: 0, h: 0 },
        "Mathematics": { w: 0, h: 0 },
        "Machine learning": { w: 0, h: 0 },
        "Algorithms": { w: 0, h: 0 },
        "Science": { w: 0, h: 0 },
        "Natural language processing": { w: 0, h: 0 },
        "Languages": { w: 0, h: 0 },
        "Music": { w: 0, h: 0 },
        "Engineering": { w: 0, h: 0 },
        "Computer science": { w: 0, h: 0 },
        "Learning": { w: 0, h: 0 },
        "Cooking": { w: 0, h: 0 },
    };

    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let words;
    let setup = false;

</script>

<div class="lg:left-1/2 z-0 lg:w-1/2 w-full lg:absolute bg-sky screen-height">
    <div bind:this={words} class="relative screen-height shadow-custom" id="words">
        <div class="">
            {#each CentersOfInterest as coi (coi)}
                <div
                    in:fade
                    id={coi}
                    class="absolute opacity-0 font-lato lg:font-extralight font-light 2xl:text-4xl xl:text-2xl md:text-2xl text-xl"
                >
                    <div id="{coi}_child" class="animate-vibe">
                        {coi.toUpperCase()}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
