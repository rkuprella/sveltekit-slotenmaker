<script>
  export let districts, content;
  // title, slug, sections (content, image) //
  import AppImage from "$lib/AppImage.svelte";
</script>

{#if districts}
  <div class="page-wrapper">
    <div class="container mx-auto px-6 space-y-12">
      <h3 class="subline md:text-center">{content.title}</h3>
      <div class=" grid grid-cols-1 md:grid-cols-2">
        <div>
          <nav aria-label="Einsatzorte" class="flex flex-wrap gap-3">
            {#each districts as district}
              <a
                class="px-4 py-2 bg-gray-100 text-brand-700 underline"
                href={district.slug}>
                {district.title}
              </a>
            {/each}
          </nav>
        </div>
        <div>
          <AppImage image={content.image} />
        </div>
      </div>

    </div>
  </div>
{/if}
