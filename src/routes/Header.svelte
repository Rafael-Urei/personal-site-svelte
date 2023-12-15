<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul
			class="flex items-center justify-center gap-8 h-20 p-[10px] font-bold text-xs leading-4 tracking-widest text-slate-600"
		>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class="">HOME</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">ABOUT</a>
			</li>
			<li aria-current={$page.url.pathname === '/portfolio' ? 'page' : undefined}>
				<a href="/portfolio">PORTFOLIO</a>
			</li>
			<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
				<a href="/contact">CONTACT</a>
			</li>
		</ul>
	</nav>
</header>
