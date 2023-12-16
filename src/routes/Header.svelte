<script>
	import { page } from '$app/stores';
	/** @type string */
	export let pathname;
</script>

<header class="relative top-0 duration-300 animate-slidedown">
	<nav>
		<ul
			class="flex items-center justify-center gap-8 h-20 p-[10px] font-bold text-xs leading-4 tracking-widest text-slate-600"
		>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class={pathname === '/' ? 'text-[#646CFF]' : null}>HOME</a>
			</li>
			<li aria-current={pathname === '/about' ? 'page' : undefined}>
				<a href="/about" class={$page.url.pathname === '/about' ? 'text-[#646CFF]' : null}>ABOUT</a>
			</li>
			<li aria-current={pathname === '/portfolio' ? 'page' : undefined}>
				<a href="/portfolio" class={$page.url.pathname === '/portfolio' ? 'text-[#646CFF]' : null}
					>PORTFOLIO</a
				>
			</li>
			<li aria-current={pathname === '/contact' ? 'page' : undefined}>
				<a href="/contact" class={$page.url.pathname === '/contact' ? 'text-[#646CFF]' : null}
					>CONTACT</a
				>
			</li>
		</ul>
	</nav>
</header>
