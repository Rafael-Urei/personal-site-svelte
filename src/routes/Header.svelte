<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul class="flex gap-8 font-bold text-xs leading-4 tracking-widest">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class="">HOME</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">ABOUT</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">PORTFOLIO</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">CONTACT</a>
			</li>
		</ul>
	</nav>
</header>
