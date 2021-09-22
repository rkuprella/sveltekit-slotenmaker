<script context="module">
  export async function load({ page, fetch }) {
    const res = await fetch(
      `${import.meta.env.VITE_URL}/domains/${import.meta.env.VITE_DOMAIN}`
    );
    const data = await res.json();

    const infoPages = [
      { title: "Über uns", slug: "team", component: PageAbout },
      { title: "Impressum", slug: "impressum", component: PageImprint },
      { title: "Datenschutz", slug: "datenschutz", component: PagePrivacy },
      { title: "Preise", slug: "preise", component: PagePrices },
      { title: "Kontakt", slug: "kontakt", component: PageContact }
    ];

    const pages = [...data.pages, ...data.districts, ...infoPages];
    const currentPage = pages.find(p => p.slug === page.params.slug);

    if (!currentPage) {
      throw Error;
    } else {
      return { props: { domain: data, currentPage } };
    }
  }
  export const prerender = true;
</script>

<script>
  export let domain, currentPage;
  import PageMeta from "$lib/PageMeta.svelte";
  import PageContent from "$lib/PageContent.svelte";
  import PageHero from "$lib/PageHero.svelte";
  import PageFAQ from "$lib/PageFAQ.svelte";
  import PageAbout from "$lib/PageAbout.svelte";
  import PageImprint from "$lib/PageImprint.svelte";
  import PageContact from "$lib/PageContact.svelte";
  import PagePrivacy from "$lib/PagePrivacy.svelte";
  import PagePrices from "$lib/PagePrices.svelte";
  import HomeFeatures from "$lib/HomeFeatures.svelte";
  import PageCTA from "$lib/PageCTA.svelte";
  import AppPageWrapper from "$lib/AppPageWrapper.svelte";
  import MarkdownIt from "markdown-it";
  const md = new MarkdownIt();
</script>

<PageMeta
  title={currentPage.meta && currentPage.meta.title ? currentPage.meta.title : `${currentPage.title} - ${domain.brand.service} ${domain.address.city}`}
  description={currentPage.meta ? currentPage.meta.description : undefined}
  image={currentPage.image ? currentPage.image : undefined}
  url="https://www.{domain.url}/{currentPage.slug}"
  siteUrl="https://www.{domain.url}"
  logo={domain.brand.logo.url} />

<main>
  <PageHero title={currentPage.title} image={currentPage.image} />
  {#if currentPage.component}
    <svelte:component this={currentPage.component} {domain} />
  {:else}
    <!-- <PageContent content={currentPage.sections} /> -->
    <AppPageWrapper>
      {#each currentPage.sections as section}
        <div class="prose xl:prose-lg px-3 mx-auto">
          {@html md.render(section.content)}
        </div>
      {/each}
    </AppPageWrapper>
    {#if currentPage.faq && currentPage.faq.length > 0}
      <PageFAQ faq={currentPage.faq} />
    {/if}
    <PageCTA phone={domain.address.phone} />
    <HomeFeatures
      features={domain.home.features}
      service={domain.brand.service} />
    <PageContent content={domain.home.outro} />
  {/if}
</main>
