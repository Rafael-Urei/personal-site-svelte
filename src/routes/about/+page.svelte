<script>
	import Card from '../../components/Card.svelte';
	export let data;
	const experiences = data.expdata;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="fixed text-slate-600 hidden md:block">
	<h2>Work Experience</h2>
	<ul class="px-10 text-slate-400">
		{#each experiences as { title }, i}
			<li><a href={`#${title}`} class="hover:text-[#2563EB] duration-300">- {title}</a></li>
		{/each}
	</ul>
	<h2>Educational Background</h2>
	<ul class="px-10 text-slate-400">
		<li><a href="#descomplica" class="hover:text-[#2563EB] duration-300">- Descomplica</a></li>
	</ul>
</section>

<section class="flex flex-col gap-20 items-center justify-center py-5">
	<h1 id="work-experience">Work Experience</h1>
	<div class="flex flex-wrap gap-20 items-center justify-center w-full">
		{#each experiences as { id, title, image, tags, enteredAt, leaveAt }, i}
			<Card {title} {image} {tags} {enteredAt} {leaveAt} />
		{/each}
	</div>
</section>

<section class="mt-5 flex flex-col gap-20 items-center justify-center py-5">
	<h1>Educational Background</h1>
	<div
		id="descomplica"
		class="flex flex-col justify-between p-5 gap-8 items-center w-72 shadow-md rounded-md text-slate-600"
	>
		<img
			src="https://yt3.googleusercontent.com/5TjlI6nK7bU8ZORSy8q7ODI0pcdcvN7Vn7-lqnhO-AlscJgTL0GGyVtNdvFCvMIv5wKfeMdRyQ=s900-c-k-c0x00ffffff-no-rj"
			alt=""
			class="rounded-full h-20 w-20 bg-indigo-500 p-1"
		/>
		<h1 class="text-[#2563EB]">Descomplica University - BR</h1>
		<p>Computer Science</p>
	</div>
</section>
