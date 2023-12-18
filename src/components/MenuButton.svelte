<script lang="ts">
    import { getContext } from "svelte";
	import { type Writable } from "svelte/store";

    const menu = getContext<Writable<boolean>>('menu');

    function openCloseMenu() {
        menu.update((prev) => !prev)
    }
</script>

<button class="h-20 px-8 md:hidden" on:click={openCloseMenu}>
   {#if (!$menu)}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
   {/if}
</button>