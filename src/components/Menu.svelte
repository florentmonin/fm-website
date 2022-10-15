<script>
    export let segment;
</script>


<div class="hover:border-2 rounded-lg hover:bg-white p-1 px-4 hover:text-stone-dark"><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">About Me</a></div>
<div class="hover:border-2 rounded-lg hover:bg-white p-1 px-4 hover:text-stone-dark"><a aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects">Projects</a></div>
<div class="hover:border-2 rounded-lg hover:bg-white p-1 px-4 hover:text-stone-dark"><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">Contact</a></div>