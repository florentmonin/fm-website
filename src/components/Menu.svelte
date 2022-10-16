<script>
    export let segment;
    $: console.log(segment)
</script>


<div class="
    hover:border-2 hover:bg-white hover:text-stone-dark rounded-lg
    p-1 px-4
    {segment === undefined ? 'font-extrabold' : 'font-normal'}
">
    <a aria-current="{segment === undefined ? 'page' : undefined}" href=".">About Me</a>
</div>
<div class="
    hover:border-2 hover:bg-white hover:text-stone-dark rounded-lg
    p-1 px-4
    {segment === 'projects' ? 'font-extrabold' : 'font-normal'}
">
    <a aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects">Projects</a>
</div>
<div class="
    hover:border-2 hover:bg-white hover:text-stone-dark rounded-lg
    p-1 px-4
    {segment === 'contact' ? 'font-extrabold' : 'font-normal'}
">
    <a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">Contact</a>
</div>