<script>
  export let major;
  // title, image, content (content, image)
  import PageHero from "$lib/PageHero.svelte";
  import PageContent from "$lib/PageContent.svelte";
</script>

{#if major}
  <div class="p-8">
    <PageHero title={major.title} image={major.image} />
    <PageContent content={major.content} />
  </div>
{/if}
