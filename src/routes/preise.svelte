<script context="module">
  export const prerender = true;
  export async function load({ page, fetch }) {
    const res = await fetch(
      `${import.meta.env.VITE_URL}/domains/${import.meta.env.VITE_DOMAIN}`
    );
    const data = await res.json();

    return { props: { domain: data } };
  }
</script>

<script>
  export let domain;
  import PageMajor from "$lib/PageMajor.svelte";
</script>

<svelte:head>
  <title>Preise - {domain.brand.service} {domain.address.city}</title>
</svelte:head>

<PageMajor major={domain.priceContent} />
