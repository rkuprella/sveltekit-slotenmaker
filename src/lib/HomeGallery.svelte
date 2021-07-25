<script>
  export let gallery;
  // image, caption
  import AppImage from "$lib/AppImage.svelte";
  import AppImageAuthor from "$lib/AppImageAuthor.svelte";
</script>

{#if gallery}
  <div
    class="flex lg:grid lg:grid-cols-3 gap-12 flex-col lg:gap-x-6 lg:gap-y-16
    px-3 lg:px-0 pb-20 md:pb-32 xl:pb-48 sm:px-24">
    {#each gallery as item}
      <div
        class="relative h-64 lg:h-80 w-4/5 max-w-md lg:max-w-full lg:w-auto
        even:self-end">
        <div class="transform -skew-x-12 bg-brand-400 overflow-hidden h-full">
          <div class="transform skew-x-12 h-full -ml-12 -mr-12">
            <AppImage image={item.image} lazy top cover />
          </div>
        </div>
        {#if item.caption}
          <div class="absolute inset-x-0 bottom-0 flex justify-center">
            <div
              class="bg-brand-200 transform -skew-x-12 font-semibold
              text-gray-700 translate-y-1/2 px-6 py-4 lg:-ml-2 lg:mr-16">
              <div class="transform skew-x-12 italic text-center">
                {item.caption}
              </div>
            </div>
          </div>
        {/if}
        <AppImageAuthor
          authorName={item.image.authorName}
          authorAgency={item.image.authorAgency} />
      </div>
    {/each}
  </div>
{/if}
