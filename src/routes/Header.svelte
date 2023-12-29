<script lang="ts">
	import { page } from '$app/stores';
	import { type Writable } from 'svelte/store';
	import MenuButton from '../components/MenuButton.svelte';
	import { getContext } from 'svelte';
	import NavList from '../components/NavList.svelte';
	export let pathname: string;
	const menu = getContext<Writable<boolean>>('menu');
</script>

<header class="relative top-0 duration-300 animate-slidedown">
	<MenuButton />
	<div
		class={$menu
			? 'fixed w-[300px] h-screen bg-white duration-300 z-10 pt-10 shadow-md overflow-hidden'
			: 'fixed w-0 h-screen duration-300 z-10 shadow-md overflow-hidden'}
	>
		<NavList {pathname} />
	</div>

	<nav class="hidden md:block">
		<NavList {pathname} />
	</nav>
</header>
