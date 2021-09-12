<script>
  export let gallery;
  // image, caption
  import AppPageWrapper from "$lib/AppPageWrapper.svelte";
  import AppImage from "$lib/AppImage.svelte";
  import AppImageAuthor from "$lib/AppImageAuthor.svelte";
  import AppImageCaption from "$lib/AppImageCaption.svelte";
</script>

{#if gallery}
  <AppPageWrapper>
    <div
      class="flex lg:grid lg:grid-cols-3 gap-12 flex-col lg:gap-x-6 lg:gap-y-16
      lg:px-0 sm:px-24 py-8">
      {#each gallery as item}
        <div
          class="relative h-64 mx-auto lg:h-80 w-full max-w-md lg:max-w-full
          lg:w-auto">
          <div
            class="lg:transform lg:-skew-x-12 bg-brand-400 overflow-hidden
            h-full">
            <div class="lg:transform lg:skew-x-12 h-full lg:-ml-12 lg:-mr-12">
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
  </AppPageWrapper>
{/if}
