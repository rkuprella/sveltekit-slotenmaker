<script context="module">
  export const prerender = true;
  export async function load({ page, fetch }) {
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
  <title>AGB - {domain.brand.service} {domain.address.city}</title>
</svelte:head>

<div>{imprint.owner}</div>

<PageContent content={domain.brand.conditions} />
