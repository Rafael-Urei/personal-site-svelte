<script lang="ts">
    import { fade, slide, fly } from 'svelte/transition'
    export let key: string
</script>

{#key key}
    <div in:fade={{duration: 300, delay: 300}} out:fade={{duration: 300}}>
        <slot/>
    </div>
{/key}

<style>
    div {
        inset: 0;
        display: grid;
    }
</style>