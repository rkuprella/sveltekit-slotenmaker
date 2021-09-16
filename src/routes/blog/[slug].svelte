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
  import AppImage from "$lib/AppImage.svelte";
  import MarkdownIt from "markdown-it";
  import PageMeta from "$lib/PageMeta.svelte";
  import PageHero from "$lib/PageHero.svelte";
  import { formatDate } from "$lib/utils/formatNumbers.js";
  const md = new MarkdownIt();
</script>

<PageMeta
  title={article.title}
  description={article.description}
  image={article.image ? article.image : undefined}
  url="https://www.{domain.url}/blog/{article.slug}"
  siteUrl="https://www.{domain.url}"
  logo={domain.brand.logo.url} />

<!-- <PageHero
  title={article.title}
  image={article.image} /> -->
<div class="bg-gradient-to-b from-brand-50 to-brand-200 h-1/2">
  <!-- skyline -->
  <div class="opacity-40 overflow-hidden w-full h-40 lg:h-80 flex items-end">
    <AppImage image={domain.home.hero.image} bottom />
  </div>
</div>

<div class="container mx-auto">

  <div
    class="relative bg-brand-50/80 border-4 border-white -mt-20 lg:-mt-40 mx-6
    mb-16">
    <a
      href="/blog"
      class="absolute top-0 text-sm -mt-16 py-3 sm:py-2 px-2 text-gray-500 flex
      space-x-3 items-center">
      <svg
        class="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0
          011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010
          1.414z"
          clip-rule="evenodd" />
      </svg>
      <span>Zurück zur Übersicht</span>
    </a>

    <div
      class="flex sm:space-x-6 space-y-6 sm:space-y-0 flex-wrap sm:flex-nowrap
      mb-8 p-6">
      <div class="w-full sm:w-1/4 my-0" style="min-height:180px">
        <AppImage image={article.image} cover />
      </div>
      <div class="flex flex-col space-y-3 justify-center items-start">

        <h1 class="font-bold text-3xl lg:text-4xl text-brand-700">
          {article.title}
        </h1>
        <div>{formatDate(article.publishingDate)}</div>
      </div>
    </div>

    <article class="px-6 pb-8">
      <div class="prose xl:prose-lg">
        {@html md.render(article.content)}
      </div>
    </article>
  </div>
</div>
