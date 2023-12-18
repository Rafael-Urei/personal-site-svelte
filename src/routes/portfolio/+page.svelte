<script>
    export let data;
</script>

<section class="flex flex-wrap items-center justify-center gap-4">
    {#each data.projects as {id, title, tags, image, url}, i}
        <a href={url ? url : '/portfolio'} target={url && "_blank"}>
            <div class={`flex flex-col gap-4 items-center w-[400px] min-h-[300px] shadow-md rounded-md`}>
                <img loading="lazy" decoding="async" role="presentation" src={image} alt="" class="rounded-tr-md rounded-tl-md"/>
                <h1>{title}</h1>
                <ul class="flex flex-wrap gap-1 text-slate-600 p-4">
                    {#each tags as tag}
                        {#if (tag === 'Firebase')}
                            <li class="rounded-full bg-orange-200 px-4 py-2 text-xs">{tag}</li>
                            {:else}
                            <li class="rounded-full bg-zinc-200 px-4 py-2 text-xs">{tag}</li>
                        {/if}
                    {/each}
                </ul>
            </div>
        </a>
    {/each}
</section>