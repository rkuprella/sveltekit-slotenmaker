<script context="module">
  export async function load({ page, fetch }) {
    const res = await fetch(
      `${import.meta.env.VITE_URL}/domains/${import.meta.env.VITE_DOMAIN}`
    );
    const data = await res.json();

    const articleRes = await fetch(`${import.meta.env.VITE_URL}/articles`);
    const articleData = await articleRes.json();

    const articles = articleData.filter(
      article => article.domain.id == import.meta.env.VITE_DOMAIN
    );

    return {
      props: { domain: data, articles, path: page.path }
    };
  }
  export const prerender = true;
</script>

<script>
  export let domain, articles, path;
  import PageMeta from "$lib/PageMeta.svelte";
  import PageHero from "$lib/PageHero.svelte";
  import BlogArticles from "$lib/BlogArticles.svelte";
  import NavTop from "$lib/NavTop.svelte";
  import NavBottom from "$lib/NavBottom.svelte";
</script>

<PageMeta
  title="Blog - {domain.brand.service}
  {domain.address.city}"
  description="Aktuelle Beiträge rund um das Thema {domain.brand.service} in
  unserem Blog"
  image={domain.home.hero.image ? domain.home.hero.image : undefined}
  url="https://www.{domain.url}/blog"
  siteUrl="https://www.{domain.url}"
  logo={domain.brand.logo.url} />

<NavTop {domain} {path} />

<main class="overflow-x-hidden">
  <PageHero title="Blog" />
  <BlogArticles {articles} />
</main>

<NavBottom {domain} {path} />
