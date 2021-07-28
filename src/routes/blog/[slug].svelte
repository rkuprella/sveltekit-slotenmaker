<script context="module">
  export const prerender = true;
  export async function load({ page, fetch }) {
    const res = await fetch(
      `${import.meta.env.VITE_URL}/domains/${import.meta.env.VITE_DOMAIN}`
    );
    const data = await res.json();

    const articleRes = await fetch(`${import.meta.env.VITE_URL}/articles`);
    const articleData = await articleRes.json();

    const article = articleData.find(
      article => article.slug === page.params.slug
    );

    if (!article || article.domain.id != import.meta.env.VITE_DOMAIN) {
      throw Error;
    } else {
      return { props: { domain: data, article } };
    }
  }
</script>

<script>
  export let domain, article;
  import MarkdownIt from "markdown-it";
  import PageMeta from "$lib/PageMeta.svelte";
  import PageHero from "$lib/PageHero.svelte";
  const md = new MarkdownIt();
</script>

<PageMeta
  title={article.title}
  description={article.description}
  image={article.image ? article.image : undefined}
  url="https://www.{domain.url}/blog/{article.slug}"
  siteUrl="https://www.{domain.url}"
  logo={domain.brand.logo.url} />

<PageHero title={article.title} image={article.image} />

<a href="/blog">Zurück zur Übersicht</a>

<article>
  <div class="prose xl:prose-lg">
    {@html md.render(article.content)}
  </div>
</article>
