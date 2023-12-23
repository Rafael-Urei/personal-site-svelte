<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import SvelteLogo from './logos/SvelteLogo.svelte';

	let div: HTMLElement;

	let y: number;
	let x: number;
	let x2: number;
	let y2: number;
	let divWidth: number;
	let divHeight: number;
	let divLeft: number;
	let divTop: number;
	let divRight: number;
	let divBottom: number;

	let isMoving = false;

	if (browser) {
		window.onresize = () => {
			divRight = div.getBoundingClientRect().width;
		};
	}

	onMount(() => {
		y = div.getBoundingClientRect().y;
		x = div.getBoundingClientRect().x;
		divWidth = div.getBoundingClientRect().width;
		divHeight = div.getBoundingClientRect().height;
		divLeft = div.getBoundingClientRect().left;
		divTop = div.getBoundingClientRect().top;
		divRight = div.getBoundingClientRect().right;
		divBottom = div.getBoundingClientRect().bottom;

		y2 = divTop + 20;
		x2 = divRight + 20;
	});

	function onMouseMove(event: MouseEvent) {
		if (isMoving) {
			(x2 = event.clientX), (y2 = event.clientY);
		}
		if (x2 >= divRight) {
			isMoving = false;
			x2 = divRight - 20;
		}
		if (y2 >= divBottom) {
			isMoving = false;
			y2 = divBottom - 20;
		}
		if (y2 <= divTop) {
			isMoving = false;
			y2 = divTop + 20;
		}
		if (x2 <= divLeft) {
			isMoving = false;
			x2 = divLeft + 20;
		}
	}
</script>

<div
	aria-hidden="true"
	on:mousemove={onMouseMove}
	on:mouseup={() => (isMoving = false)}
	bind:this={div}
	class="relative bg-transparent max-h-96 h-96 max-w-full shadow-inner hidden md:block"
>
	<div
		aria-hidden="true"
		on:mousedown={() => (isMoving = true)}
		class="fixed -translate-x-1/2 -translate-y-1/2 cursor-pointer"
		style="top: {y2}px; left: {x2}px;"
	>
		<SvelteLogo />
	</div>
</div>

<!-- <script lang="ts">
	import { browser } from '$app/environment';

	let isMoving = false;

	let height = 0;
	let width = 0;
	let lastClientX = 0;

	if (browser) {
		width = document.body.clientWidth;
		height = document.body.clientHeight;

		window.onresize = () => {
			width = document.body.clientWidth;
			height = document.body.clientHeight;
		};
	}

	let x = 0;
	let y = 0;

	function onMouseMove(event: MouseEvent) {
		if (isMoving) {
			(x = event.clientX), (y = event.clientY);
			lastClientX = x;
		}
		if (event.clientX >= width || x >= width) {
			x = width - 100;
		}
	}
</script>

<div
	on:mousedown={() => (isMoving = true)}
	class="absolute h-10 w-10 bg-black"
	style="left: {x}px; top: {y}px;"
	aria-hidden
></div>

<svelte:window on:mousemove={onMouseMove} on:mouseup={() => (isMoving = false)} /> -->
