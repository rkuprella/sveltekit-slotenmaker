<script context="module">
  export async function load({ page, fetch }) {
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
  import PageWhatsappButton from "$lib/PageWhatsappButton.svelte";
  let showMenu = false;
  let showSubMenu = null;
  let footerMenu = [
    { title: "Blog", slug: "blog" },
    { title: "Über uns", slug: "ueber-uns" },
    { title: "Impressum", slug: "impressum" },
    { title: "Datenschutz", slug: "datenschutz" }
  ];
  let headerMenu = [
    { title: "Home", slug: "" },
    { title: "Leistungen", slug: "leistungen", subPages: domain.pages },
    { title: "Einsatzorte", slug: "einsatzorte", subPages: domain.districts },
    { title: "Preise", slug: "preise" },
    { title: "Blog", slug: "blog" }
  ];
  function closeMenus() {
    showMenu = false;
    showSubMenu = null;
  }
  function handleWindowKeyDown(event) {
    if (event.key === "Escape") {
      showMenu = false;
      showSubMenu = null;
    }
  }
  function toggleSubMenu(str) {
    showSubMenu === str ? (showSubMenu = null) : (showSubMenu = str);
  }
  function scrollToTop() {
    document.body.scrollIntoView();
  }
</script>

<svelte:window on:keydown={handleWindowKeyDown} />

<!-- header menu -->
<header
  class="relative z-50 bg-white border-b border-brand-200"
  use:clickOutside
  on:click_outside={closeMenus}>
  <nav
    aria-label="Hauptmenü"
    class="flex items-center justify-between container mx-auto h-20 xl:h-24 px-2">
    <a
      href="/"
      on:click={closeMenus}
      class="flex space-x-2 items-center pl-1 pr-3 rounded-lg text-gray-800">
      <img
        class="w-12 h-12 xl:w-16 xl:h-16"
        src={domain.brand.icon.url}
        width={domain.brand.icon.width}
        height={domain.brand.icon.height}
        alt="Logo {domain.brand.name}" />
      <div class="text-lg xl:text-2xl">
        {domain.brand.service}
        <strong>{domain.address.city}</strong>
      </div>
    </a>
    <div class="md:flex items-center hidden space-x-1 h-full">
      {#each headerMenu as page, i}
        {#if page.subPages}
          <div class="relative group h-full grid place-items-center">
            <button
              role="button"
              type="button"
              on:click={() => toggleSubMenu(i)}
              class="py-2 pl-2 pr-1 rounded-lg flex space-x-1 items-center
              group-hover:text-brand-700 cursor-default {showSubMenu == i && 'text-brand-700'}">
              <span>{page.title}</span>
              <svg
                class="w-4 h-4 transform transition-transform duration-300
                ease-in-out group-hover:rotate-90 {showSubMenu == i && 'rotate-90'}"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0
                  011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd" />
              </svg>
            </button>
            <div
              class="absolute top-full left-1/2 transform -translate-x-1/2
              group-hover:translate-y-0 bg-white border-t-0 px-3 py-3
              pointer-events-none opacity-0 group-hover:opacity-100
              group-hover:pointer-events-auto {showSubMenu == i ? 'opacity-100 pointer-events-auto translate-y-0' : '-translate-y-4'}
              transition delay-150 duration-150 shadow-border rounded-tl-none
              rounded-tr-none flex flex-col items-start">
              {#each page.subPages as subpage}
                <a
                  tabindex={showSubMenu == i ? (path === `/${subpage.slug}` ? '-1' : '0') : '-1'}
                  rel="prefetch"
                  class="grid rounded-lg w-full place-items-center py-1
                  hover:text-brand-700"
                  href="/{subpage.slug}"
                  on:click={closeMenus}>
                  <div
                    class="py-2 px-4 {path === `/${subpage.slug}` && 'link-active'}">
                    {subpage.title}
                  </div>
                </a>
              {/each}
            </div>
          </div>
        {:else}
          <a
            tabindex={path === `/${page.slug}` ? '-1' : '0'}
            rel="prefetch"
            href="/{page.slug}"
            class="py-2 px-2 rounded-lg hover:text-brand-700 {path === `/${page.slug}` && 'link-active'}">
            {page.title}
          </a>
        {/if}
      {/each}
    </div>
    <button
      type="button"
      role="button"
      aria-label="Menü"
      class="md:hidden flex-shrink-0 h-12 w-12 rounded-lg grid
      place-items-center"
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
  <!-- side nav -->
  <div
    class="absolute z-50 top-20 inset-x-0 bg-white shadow-xl px-6 py-6 {showMenu ? 'block md:hidden' : 'hidden'}">
    <nav aria-label="Hauptmenü" class="flex flex-col">
      {#each headerMenu as page, i}
        {#if page.subPages}
          <button
            on:click={() => toggleSubMenu(i)}
            class="py-3 px-4 rounded-lg flex space-x-1 items-center
            justify-center {showSubMenu == i && 'text-brand-700 font-bold'}">
            <span>{page.title}</span>
            <svg
              class="w-4 h-4 transform transition-transform duration-300
              ease-in-out {showSubMenu == i && 'rotate-90'}"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0
                011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
            </svg>
          </button>
          {#if showSubMenu == i}
            <div class="bg-gray-400/10">
              {#each page.subPages as subpage}
                <a
                  tabindex={path === `/${subpage.slug}` ? '-1' : '0'}
                  rel="prefetch"
                  class="rounded-lg grid place-items-center py-1 text-sm"
                  href="/{subpage.slug}"
                  on:click={closeMenus}>
                  <div
                    class="py-2 px-4 flex items-center space-x-2 {path === `/${subpage.slug}` && 'link-active'}">
                    <span class="text-brand-700 font-bold">/</span>
                    <span>{subpage.title}</span>
                  </div>
                </a>
              {/each}
            </div>
          {/if}
        {:else}
          <a
            tabindex={path === `/${page.slug}` ? '-1' : '0'}
            rel="prefetch"
            class="grid rounded-lg place-items-center py-1"
            href="/{page.slug}"
            on:click={closeMenus}>
            <div class="py-2 px-4 {path === `/${page.slug}` && 'link-active'}">
              {page.title}
            </div>
          </a>
        {/if}
      {/each}
    </nav>
  </div>
</header>

<!-- nav call snippet -->
<NavCallSnippet
  phone={domain.address.phone}
  whatsappMessage={domain.brand.whatsappMessage}
  whatsappNumber={domain.brand.whatsappNumber} />

<!-- content -->
<div class="overflow-x-hidden">
  <slot />
</div>

<!-- footer menu -->
<footer class="bg-gray-200">
  <div
    class="relative container mx-auto flex flex-col md:items-center px-6
    space-y-6 pt-12 pb-20 md:pb-6">
    <!-- back button -->
    <div class="absolute top-0 right-0 transform -translate-y-1/2 mr-2">
      <button
        aria-label="Zum Seitenanfang springen"
        title="Zum Seitenanfang springen"
        role="button"
        type="button"
        class="w-16 h-16 bg-gray-100 rounded-full grid place-items-center
        text-gray-600 shadow-xl hover:ring-4 hover:ring-brand-300"
        on:click={scrollToTop}>
        <svg
          class="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0
            01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0
            01-1.414 0z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <div class="w-16 h-16 rounded-full grid place-items-center self-center">
      <img
        src={domain.brand.icon.url}
        width={domain.brand.icon.width}
        height={domain.brand.icon.height}
        alt="Logo" />
    </div>

    <nav
      aria-label="Footer Menü"
      class="flex flex-col flex-wrap md:flex-row md:items-center justify-center
      md:space-x-1">
      {#each footerMenu as page}
        <a
          tabindex={path === `/${page.slug}` ? '-1' : '0'}
          rel="prefetch"
          class="grid place-items-start md:place-items-center py-1 rounded-lg"
          href="/{page.slug}">
          <div
            class="py-2 px-2 hover:text-brand-700 {path === `/${page.slug}` && 'link-active'}">
            {page.title}
          </div>
        </a>
      {/each}
    </nav>
    <div class="text-center border-t border-gray-300 pt-6 w-full text-sm ">
      {new Date().getFullYear()} &copy; {domain.brand.name}
    </div>
  </div>
</footer>
