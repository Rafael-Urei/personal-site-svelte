<script>
	import { format } from 'date-fns';
	/** @type string*/
	export let title;
	/** @type string*/
	export let image;
	/** @type string*/
	export let tags;
	/** @type string*/
	export let enteredAt;
	/** @type string*/
	export let leaveAt;
</script>

<div
	id={`${title}`}
	class="relative flex flex-col justify-between p-5 gap-8 items-center h-96 w-72 shadow-md rounded-md"
>
	<img src={image} alt="" class="absolute -top-8 rounded-full h-20 w-20 bg-indigo-500 p-1" />
	<h1 class="mt-16 text-[#2563EB]">{title}</h1>
	<ul class="flex flex-wrap items-center justify-center gap-2 p-3">
		{#each tags as tag}
			<li class="rounded-full text-center text-xs bg-slate-200 py-2 px-3 text-slate-600">{tag}</li>
		{/each}
	</ul>
	<div class="flex text-xs text-slate-600 gap-2">
		<div class="flex gap-1">
			<h3>From:</h3>
			<p>{format(new Date(enteredAt), 'yyyy/MM/dd')}</p>
		</div>
		{#if leaveAt === ''}
			<p>Current</p>
		{:else}
			<div class="flex gap-1">
				<h3>Until:</h3>
				<p>{format(new Date(leaveAt), 'yyy/MM/dd')}</p>
			</div>
		{/if}
	</div>
</div>
