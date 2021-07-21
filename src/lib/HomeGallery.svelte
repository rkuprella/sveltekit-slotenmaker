<script>
  export let gallery;
  // image, caption
  import AppImage from "$lib/AppImage.svelte";
  import AppImageAuthor from "$lib/AppImageAuthor.svelte";
</script>

{#if gallery}
  <div
    class="flex md:grid md:grid-cols-3 gap-12 flex-col md:gap-3 overflow-hidden
    md:h-96 px-3 md:px-0">
    {#each gallery as item}
      <div class="relative h-64 md:h-80 w-4/5 md:w-auto even:self-end">
        <div class="transform -skew-x-12 bg-blue-400 overflow-hidden h-full">
          <div class="transform skew-x-12 h-full -ml-12 -mr-12">
            <AppImage image={item.image} lazy top cover />
          </div>
        </div>
        <div
          class="absolute left-1/2 -translate-x-1/2 md:translate-x-0
          md:inset-x-0 bottom-0 -mb-6 md:-mb-12 -ml-2 md:mr-16 bg-blue-200
          transform -skew-x-12 py-4 md:px-0 md:py-0 md:h-24">
          <div
            class="grid transform skew-x-12 px-6 h-full place-items-center
            text-gray-700 font-semibold lg:text-lg text-center">
            {item.caption}
          </div>
        </div>
        <AppImageAuthor
          authorName={item.image.authorName}
          authorAgency={item.image.authorAgency}
          authorLink={item.image.authorLink} />
      </div>
    {/each}
    <!-- spacer -->
    <div class="h-4 md:h-24" />
  </div>
{/if}
