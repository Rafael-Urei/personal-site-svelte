<script>
	import Card from '../../components/Card.svelte';
	export let data;
	const experiences = data.expdata;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="flex flex-col gap-20 items-center justify-center py-5">
	<h1>Work Experience</h1>
	<div class="flex flex-wrap gap-20 items-center justify-center w-full">
		{#each experiences as { id, title, image, tags, enteredAt, leaveAt }, i}
			<Card {title} {image} {tags} {enteredAt} {leaveAt} />
		{/each}
	</div>
</section>
