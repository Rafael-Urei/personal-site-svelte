<script>
	import Header from './Header.svelte';
	import '../app.css';
	import InstagramLogo from '../components/InstagramLogo.svelte';
	import GithubLogo from '../components/GithubLogo.svelte';
	import LinkedinLogo from '../components/LinkedinLogo.svelte';
	import BackTopButton from '../components/BackTopButton.svelte'
	import { browser } from '$app/environment';
	export let data;

	let initialState = false;

	if (browser) {
		window.onscroll = () => {
			if (window.scrollY > 20) return initialState = true;
			return initialState = false;
		}
}

</script>

<div class="app">
	<Header pathname={data.pathname} />

	<main>
		<slot />
		{#if (initialState)}
			<BackTopButton/>
		{/if}
	</main>

	<footer class="flex gap-8 h-20 p-[10px] items-center justify-center">
		<InstagramLogo />
		<GithubLogo />
		<LinkedinLogo />
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		box-sizing: border-box;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
