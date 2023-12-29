<script>
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
</script>

<div class="flex items-center justify-center">
	<div
		class="max-w-[375px] md:h-[400px] h-[300px] md:absolute md:right-[50px] md:top-1/2 md:-translate-y-1/2 top-1/2"
	>
		<Canvas rendererParameters={{ antialias: true }}>
			<Scene />
		</Canvas>
	</div>
</div>
