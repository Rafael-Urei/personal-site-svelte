<script>
	import MailLogo from '../../components/logos/MailLogo.svelte';
	import GmailLogo from '../../components/logos/GmailLogo.svelte';
</script>

<section>
	<div class="flex flex-col items-center gap-2">
		<h1>Contact me:</h1>
		<a
			href="mailto:rafaelss.dev@gmail.com"
			class="flex items-center gap-2 duration-200 rounded-md bg-zinc-200 px-4 py-2 cursor-pointer border-2 border-transparent hover:bg-white hover:border-slate-200"
			><MailLogo /> rafaelss.dev@gmail.com</a
		>
		<a
			href="https://mail.google.com/mail/u/0/?fs=1&to=rafaelss.dev@gmail.com&tf=cm&su=Oportunidade/Ofertas"
			target="_blank"
			class="flex items-center gap-2 duration-200 rounded-md bg-zinc-200 px-4 py-2 cursor-pointer border-2 border-transparent hover:bg-white hover:border-slate-200"
			><GmailLogo /> rafaelss.dev@gmail.com</a
		>
	</div>
</section>
