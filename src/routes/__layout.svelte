<script context="module">
  export async function load({ page }) {
    const res = await fetch(
      `${import.meta.env.VITE_URL}/domains/${import.meta.env.VITE_DOMAIN}`
    );
    const data = await res.json();
    return {
      props: { domain: data, path: page.path }
    };
  }
</script>

<script>
  import "../app.postcss";
  import { clickOutside } from "$lib/utils/clickOutside.js";
  export let domain;
  export let path;
  import NavCallSnippet from "$lib/NavCallSnippet.svelte";
  let showMenu = false;
  let footerMenu = [
    { title: "Einsatzorte", slug: "einsatzorte" },
    { title: "Blog", slug: "blog" },
    { title: "Über uns", slug: "ueber-uns" },
    { title: "Impressum", slug: "impressum" },
    { title: "AGB", slug: "agb" },
    { title: "Datenschutz", slug: "datenschutz" }
  ];
  let headerMenu = [
    ...domain.pages,
    { title: "Preise", slug: "preise" },
    { title: "Blog", slug: "blog" }
  ];
  function handleClickOutside(event) {
    showMenu = false;
  }
</script>

<!-- header menu -->
<header class="bg-gray-100 border-b border-blue-200">
  <nav
    class="flex items-center justify-between container mx-auto h-20 xl:h-24 px-3">
    <a href="/" class="flex space-x-2 items-center h-full px-3">
      <img
        class="w-12 h-12"
        src={domain.brand.icon.formats.thumbnail.url}
        width={domain.brand.icon.formats.thumbnail.width}
        height={domain.brand.icon.formats.thumbnail.height}
        alt="Logo {domain.brand.name}" />
      <div class="text-xl text-brand-headline">
        {domain.brand.service}
        <strong>{domain.address.city}</strong>
      </div>
    </a>
    <div class="lg:flex items-center hidden">
      {#each headerMenu as page}
        <a
          rel="prefetch"
          href="/{page.slug}"
          class="py-2 px-4 {path === `/${page.slug}` && 'link-active'}">
          {page.title}
        </a>
      {/each}
    </div>
    <button
      type="button"
      role="button"
      aria-label="Menü"
      class="lg:hidden flex-shrink-0 h-12 w-12 grid place-items-center {showMenu ? 'pointer-events-none' : ''}"
      on:click={() => (showMenu = !showMenu)}>
      {#if !showMenu}
        <svg
          class="w-8 h-8 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      {:else}
        <svg
          class="w-8 h-8 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      {/if}
    </button>
  </nav>
</header>

<!-- side nav -->
<div
  class="absolute z-50 top-20 inset-x-0 bg-gray-100 shadow-xl px-3 py-6 {showMenu ? 'block lg:hidden' : 'hidden'}"
  use:clickOutside
  on:click_outside={handleClickOutside}>
  <nav class="flex flex-col space-y-2 items-center">
    {#each headerMenu as page}
      <a
        rel="prefetch"
        class="py-2 px-2 {path === `/${page.slug}` && 'link-active'}"
        href="/{page.slug}"
        on:click={() => (showMenu = false)}>
        {page.title}
      </a>
    {/each}
  </nav>
</div>

<!-- content -->
<slot />

<!-- footer menu -->
<footer class="pt-12 pb-28 md:pb-12 bg-gray-200">
  <div class="container mx-auto px-6 space-y-12">
    <nav
      class="flex flex-col flex-wrap md:flex-row items-center justify-center">
      {#each footerMenu as page}
        <a
          rel="prefetch"
          class="px-4 py-2 {path === `/${page.slug}` && 'link-active'}"
          href="/{page.slug}">
          {page.title}
        </a>
      {/each}
    </nav>
    <div class="text-center">
      {new Date().getFullYear()} &copy; {domain.brand.name}
    </div>
  </div>
</footer>

<!-- nav call snippet -->
<NavCallSnippet
  phone={domain.address.phone}
  whatsappMessage={domain.brand.whatsappMessage}
  whatsappNumber={domain.brand.whatsappNumber} />

<!-- back button -->
<div class="fixed bottom-0 right-0 mb-20 md:mb-2 mr-2">
  <button
    class="w-16 h-16 bg-white transition-opacity duration-100 ease-in-out
    opacity-25 hover:opacity-100 active:opacity-100 rounded-full grid
    place-items-center text-gray-600">
    <svg
      class="w-8 h-8"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414
        1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
        clip-rule="evenodd" />
    </svg>
  </button>
</div>
