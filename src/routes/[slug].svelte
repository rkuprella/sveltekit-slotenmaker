<script context="module">
  export const prerender = true;
  export async function load({ page, fetch }) {
    const res = await fetch(
      `${import.meta.env.VITE_URL}/domains/${import.meta.env.VITE_DOMAIN}`
    );
    const data = await res.json();

    const infoPages = [
      { title: "Über uns", slug: "ueber-uns", component: PageAbout },
      { title: "Impressum", slug: "impressum", component: PageImprint },
      { title: "Datenschutz", slug: "datenschutz", component: PagePrivacy },
      { title: "Preise", slug: "preise", component: PagePrices }
    ];

    const pages = [...data.pages, ...data.districts, ...infoPages];
    const currentPage = pages.find(p => p.slug === page.params.slug);

    if (!currentPage) {
      throw Error;
    } else {
      return { props: { domain: data, currentPage } };
    }
  }
</script>

<script>
  export let domain, currentPage;
  import PageMeta from "$lib/PageMeta.svelte";
  import PageContent from "$lib/PageContent.svelte";
  import PageHero from "$lib/PageHero.svelte";
  import PageFAQ from "$lib/PageFAQ.svelte";
  import PageAbout from "$lib/PageAbout.svelte";
  import PageImprint from "$lib/PageImprint.svelte";
  import PagePrivacy from "$lib/PagePrivacy.svelte";
  import PagePrices from "$lib/PagePrices.svelte";
  import HomeFeatures from "$lib/HomeFeatures.svelte";
  import PageCTA from "$lib/PageCTA.svelte";
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
    <PageContent content={currentPage.sections} />
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
