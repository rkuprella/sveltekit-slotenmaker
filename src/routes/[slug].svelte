<script context="module">
  export async function load({ page }) {
    const res = await fetch(
      `${import.meta.env.VITE_URL}/domains/${import.meta.env.VITE_DOMAIN}`
    );
    const data = await res.json();

    const pages = [...data.pages, ...data.districts];
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
  <PageContent content={currentPage.sections} />
  <PageFAQ faq={currentPage.faq} />
</main>
