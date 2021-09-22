<script>
  export let domain;
  export let path;
  let footerMenu = [
    { title: "Blog", slug: "blog" },
    { title: "Über uns", slug: "team" },
    { title: "Impressum", slug: "impressum" },
    { title: "Datenschutz", slug: "datenschutz" },
    { title: "Kontakt", slug: "kontakt" }
  ];
  function scrollToTop() {
    document.body.scrollIntoView();
  }
</script>

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
