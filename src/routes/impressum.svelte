<script context="module">
  export async function load({ page }) {
    const res = await fetch(
      `${import.meta.env.VITE_URL}/domains/${import.meta.env.VITE_DOMAIN}`
    );
    const data = await res.json();

    const imprintRes = await fetch(`${import.meta.env.VITE_URL}/imprint`);
    const imprintData = await imprintRes.json();

    return { props: { domain: data, imprint: imprintData } };
  }
</script>

<script>
  export let domain, imprint;
  import PageContent from "$lib/PageContent.svelte";
</script>

<svelte:head>
  <title>Impressum - {domain.brand.service} {domain.address.city}</title>
</svelte:head>

<address>{imprint.owner} {imprint.address.city}</address>

<PageContent content={imprint.content} />

<div class="container mx-auto">
  <ul>
    <li>
      <a href={domain.home.hero.image.authorLink}>
        {domain.home.hero.image.authorName} - {domain.home.hero.image.authorAgency}
      </a>
    </li>
  </ul>
</div>
