<script>
  export let features;
  // title, bullets, image
  import AppImage from "$lib/AppImage.svelte";
</script>

{#if features}
  <div class="page-wrapper bg-blue-100 relative">
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
      class="container mx-auto pt-8 pb-16 grid grid-cols-1 sm:grid-cols-2 gap-3
      lg:grid-cols-4 px-3">
      {#each features as feature, i}
        <div
          class="shadow-border bg-gray-100 pb-8 px-6 flex flex-col space-y-3">
          <header
            class="flex space-x-3 items-center py-4 border-b border-gray-200">
            {#if feature.image}
              <AppImage image={feature.image} />
            {:else}
              <div
                class="w-6 h-6 bg-blue-600 rounded-full grid place-items-center">
                <span class="text-white text-sm font-bold">{i + 1}</span>
              </div>
            {/if}
            <h3 class="subline">{feature.title}</h3>
          </header>
          <ul>
            {#each feature.bullets.split(',') as bullet}
              <li class="flex space-x-2 py-1">
                <svg
                  class="w-5 h-5 flex-shrink-0 text-blue-600 transform
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
        </div>
      {/each}
    </div>
  </div>
{/if}
