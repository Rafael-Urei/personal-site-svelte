<script>
	import { T, useTask } from '@threlte/core';
	import { GLTF, OrbitControls } from '@threlte/extras';
	let rotation = 0;
	useTask((delta) => {
		rotation += delta / 4;
	});
</script>

<T.PerspectiveCamera makeDefault fov={2} position={[10, 40, 20]}>
	<OrbitControls />
</T.PerspectiveCamera>

<T.AmbientLight color="blue" intensity={4} />
<T.PointLight intensity={2} position.y={0.6} />
<T.DirectionalLight color="blue" position.y={-0.6} />
<T.DirectionalLight position.y={-0.6} />

<GLTF url="/models/svelte.glb" rotation.y={rotation} rotation.x={rotation} />
