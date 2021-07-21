<script context="module">
    export async function load() {
        const res = await fetch(`${import.meta.env.VITE_URL}/domains/${import.meta.env.VITE_DOMAIN}`);
        const data = await res.json();

        const articleRes = await fetch(`${import.meta.env.VITE_URL}/articles`);
        const articleData = await articleRes.json();

        const articles = articleData.filter(article => article.domain.id == import.meta.env.VITE_DOMAIN)

        return {
            props: { domain: data, articles }
        }
    }
</script>

<script>
export let domain, articles
import PageMeta from '$lib/PageMeta.svelte'
import PageMajor from '$lib/PageMajor.svelte'
</script>

<PageMeta 
    title="Blog - {domain.brand.service} {domain.address.city}" 
    description="Aktuelle Beiträge rund um das Thema {domain.brand.service} in unserem Blog"
    image="{domain.home.hero.image ? domain.home.hero.image : undefined}"
    url="https://www.{domain.url}/blog"
    siteUrl="https://www.{domain.url}"
    logo="{domain.brand.logo.url}"
/>

<PageMajor major="{domain.blogContent}" />

<nav class="flex flex-col">
    {#each articles as article}
    <a href="/blog/{article.slug}">{article.title}</a>
    {/each}
</nav>