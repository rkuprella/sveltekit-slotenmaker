<script>
  export let features, service;
  // title, bullets, image
  import AppPageWrapper from "$lib/AppPageWrapper.svelte";
  import AppImage from "$lib/AppImage.svelte";
</script>

{#if features}
  <AppPageWrapper
    polygon
    title="Unsere Leistungen"
    label="{service} &amp; mehr">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-4
      justify-items-stretch">
      {#each features as feature, i}
        <section
          class="shadow-border bg-white pb-6 px-4 flex flex-col space-y-3">
          <header
            class="flex space-x-1 items-center py-2 border-b border-gray-200">
            {#if feature.image}
              <div class="w-16 h-16 xl:w-20 xl:h-20">
                <AppImage image={feature.image} lazy />
              </div>
            {:else}
              <div
                class="w-6 h-6 bg-brand-700 rounded-full grid place-items-center">
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
  </AppPageWrapper>
{/if}
