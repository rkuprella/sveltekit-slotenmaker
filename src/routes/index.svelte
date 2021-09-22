<script context="module">
  export async function load({ page, fetch }) {
    const res = await fetch(
      `${import.meta.env.VITE_URL}/domains/${import.meta.env.VITE_DOMAIN}`
    );
    const data = await res.json();

    const articleRes = await fetch(`${import.meta.env.VITE_URL}/articles`);
    const articleData = await articleRes.json();

    const articles = articleData
      .filter(article => article.domain.id == import.meta.env.VITE_DOMAIN)
      .slice(0, 3);

    return {
      props: { domain: data, articles, path: page.path }
    };
  }
</script>

<script>
  export let domain, articles, path;
  import HomeHero from "$lib/HomeHero.svelte";
  import PageContent from "$lib/PageContent.svelte";
  import HomeFeatures from "$lib/HomeFeatures.svelte";
  import HomeFocus from "$lib/HomeFocus.svelte";
  import HomePrices from "$lib/HomePrices.svelte";
  import HomeGallery from "$lib/HomeGallery.svelte";
  import PageBanner from "$lib/PageBanner.svelte";
  import HomeReviews from "$lib/HomeReviews.svelte";
  import HomeDistricts from "$lib/HomeDistricts.svelte";
  import PageFAQ from "$lib/PageFAQ.svelte";
  import HomeArticles from "$lib/HomeArticles.svelte";
  import HomeCheckout from "$lib/HomeCheckout.svelte";
  import PageMeta from "$lib/PageMeta.svelte";
  import NavTop from "$lib/NavTop.svelte";
  import NavBottom from "$lib/NavBottom.svelte";
</script>

<PageMeta
  title={domain.home.meta && domain.home.meta.title ? domain.home.meta.title : `${domain.brand.service} ${domain.address.city} - ${domain.brand.slogan}`}
  description={domain.home.meta ? domain.home.meta.description : ''}
  image={domain.home.hero.image ? domain.home.hero.image : undefined}
  url="https://www.{domain.url}"
  siteUrl="https://www.{domain.url}"
  logo={domain.brand.logo.url} />

<NavTop {domain} {path} />

<main class="overflow-x-hidden">
  <HomeHero
    hero={domain.home.hero}
    phone={domain.address.phone}
    whatsappNumber={domain.brand.whatsappNumber}
    reviewContent={domain.reviewContent}
    service={domain.brand.service} />
  <PageContent content={domain.home.intro} intro />
  <HomeFeatures
    features={domain.home.features}
    service={domain.brand.service} />
  <PageContent content={domain.home.contentFirst} />
  <PageBanner />
  <PageContent content={domain.home.contentLast} />
  <HomeReviews reviewContent={domain.reviewContent} />
  <HomePrices prices={domain.prices ? domain.prices : domain.brand.prices} />
  <HomeFocus focus={domain.home.focus} phone={domain.address.phone} />
  <HomeDistricts
    districts={domain.districts}
    content={domain.districtsContent} />
  <PageFAQ faq={domain.faq} />
  <HomeGallery gallery={domain.home.gallery} />
  <HomeArticles {articles} />
  <HomeCheckout
    whatsappNumber={domain.brand.whatsappNumber}
    city={domain.address.city} />
  <PageContent content={domain.home.outro} outro phone={domain.address.phone} />
</main>

<NavBottom {domain} {path} />
