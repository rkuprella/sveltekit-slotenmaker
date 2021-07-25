<script>
  export let features, service;
  // title, bullets, image
  import AppImage from "$lib/AppImage.svelte";
</script>

{#if features}
  <div class="page-wrapper bg-gray-100 relative">
    <!-- polygon shape -->
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 918 39.5"
      class="absolute inset-x-0 bottom-0 pointer-events-none text-white">
      <polyline points="459,39.5 0,39.5 0,0 " />
      <polyline points="459,39.5 918,39.5 918,0 " />
    </svg>
    <div
      class="container mx-auto pt-8 pb-16 px-3 space-y-12 flex flex-col
      items-start md:items-center">
      <header class="md:text-center px-3">
        <h2 class="headline">Unsere Leistungen</h2>
        <div
          class="text-lg inline-flex items-center px-4 py-2 md:text-xl
          font-semibold text-brand-700 link-active">
          <span>{service} &amp; mehr</span>
        </div>
      </header>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-4
        justify-items-stretch">
        {#each features as feature, i}
          <section
            class="shadow-border bg-white pb-8 px-4 flex flex-col space-y-3">
            <header
              class="flex space-x-1 items-center py-4 border-b border-gray-200">
              {#if feature.image}
                <div class="w-16 h-16 xl:w-20 xl:h-20">
                  <AppImage image={feature.image} />
                </div>
              {:else}
                <div
                  class="w-6 h-6 bg-brand-700 rounded-full grid
                  place-items-center">
                  <span class="text-white text-sm font-bold">{i + 1}</span>
                </div>
              {/if}
              <h3 class="subline">{feature.title}</h3>
            </header>
            <ul>
              {#each feature.bullets.split(',') as bullet}
                <li class="flex space-x-2 py-1">
                  <svg
                    class="w-5 h-5 flex-shrink-0 text-brand-600 transform
                    translate-y-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414
                      0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0
                      011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">{bullet}</span>
                </li>
              {/each}
            </ul>
          </section>
        {/each}
      </div>
    </div>
  </div>
{/if}
