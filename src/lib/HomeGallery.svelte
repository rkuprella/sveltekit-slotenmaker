<script>
  export let gallery;
  // image, caption
  import AppImage from "$lib/AppImage.svelte";
  import AppImageAuthor from "$lib/AppImageAuthor.svelte";
  import AppImageCaption from "$lib/AppImageCaption.svelte";
</script>

{#if gallery}
  <div class="page-wrapper ">
    <div
      class="flex lg:grid lg:grid-cols-3 gap-12 flex-col lg:gap-x-6 lg:gap-y-16
      px-3 lg:px-0 sm:px-24 py-8">
      {#each gallery as item}
        <div
          class="relative h-64 lg:h-80 w-4/5 max-w-md lg:max-w-full lg:w-auto
          even:self-end">
          <div class="transform -skew-x-12 bg-brand-400 overflow-hidden h-full">
            <div class="transform skew-x-12 h-full -ml-12 -mr-12">
              <AppImage image={item.image} lazy top cover />
            </div>
          </div>
          <AppImageCaption caption={item.caption} gallery />
          <AppImageAuthor
            authorName={item.image.authorName}
            authorAgency={item.image.authorAgency} />
        </div>
      {/each}
    </div>
  </div>
{/if}
