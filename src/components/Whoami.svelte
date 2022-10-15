<script>
    import * as rendering from "../rendering.js";
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


    function get_words_sizes() {
        for (let i = 0; i < CentersOfInterest.length; i++) {
            const coi = CentersOfInterest[i];
            let element = document.getElementById(coi);
            if (element === null) {
                continue;
            }
            let w = element.clientWidth;
            let h = element.clientHeight;
            wordSizes[coi] = { w: w, h: h };
        }
    }

    function translate_words(firstTime) {
        if (setup) {
            get_words_sizes();
            rendering.translate_words(wordSizes, CentersOfInterest, firstTime);
        }
    }
    let debounceTranslateWords = rendering.debounce(
        () => {translate_words(false)},
        250,
        false
    );

    onMount(() => {

        new ResizeObserver(debounceTranslateWords).observe(words)

        words.style.opacity = 0;
        setTimeout(() => {
            setup = true;
            let initOpacity = 0.0;
            const timer = setInterval(() => {
                    if (initOpacity >= 1) {
                        clearInterval(timer);
                    }
                    words.style.opacity = initOpacity;
                    words.style.filter = 'alpha(opacity=' + initOpacity * 100 + ")";
                    initOpacity += 0.1;
                }, 40
            );
            translate_words(true);
        }, 1000)
    });
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
