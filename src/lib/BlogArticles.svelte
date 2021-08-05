<script>
  export let articles;
  // title, description, content, publishingDate, image, slug
  import AppPageWrapper from "$lib/AppPageWrapper.svelte";
  import AppImage from "$lib/AppImage.svelte";
  import AppImageAuthor from "$lib/AppImageAuthor.svelte";
  import { formatDate } from "$lib/utils/formatNumbers.js";
</script>

{#if articles}
  <AppPageWrapper>
    <!-- articles content -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3
      justify-items-center">
      {#each articles as article}
        <a
          href="/blog/{article.slug}"
          class="flex flex-col rounded-lg overflow-hidden max-w-md lg:max-w-none
          inner-focus hover:bg-brand-50 transition-colors duration-150
          ease-in-out">
          <div class="relative h-48">
            <AppImage image={article.image} cover top lazy />
            <AppImageAuthor
              authorName={article.image.authorName}
              authorAgency={article.image.authorAgency} />
          </div>
          <div class="px-6 flex-1 flex flex-col">
            <header class="pt-6 flex flex-col items-start space-y-2">
              <small
                class="flex items-center space-x-1 bg-brand-700 px-2 py-0.5
                rounded-full uppercase text-white text-xs">
                {formatDate(article.publishingDate)}
              </small>
              <h4 class="subline">{article.title}</h4>
            </header>
            <p class="py-6 flex-1">
              <span class="line-clamp-3">{article.description}</span>
            </p>
          </div>
        </a>
      {/each}
    </div>
  </AppPageWrapper>
{/if}
