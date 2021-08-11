<script>
  export let articles;
  // title, description, content, publishingDate, image, slug
  import AppPageWrapper from "$lib/AppPageWrapper.svelte";
  import AppImage from "$lib/AppImage.svelte";
  import AppImageAuthor from "$lib/AppImageAuthor.svelte";
  import { formatDate } from "$lib/utils/formatNumbers.js";
</script>

{#if articles}
  <AppPageWrapper polygon title="Aus unserem Blog">
    <a slot="link" href="/blog" class="link">Alle Artikel</a>
    <!-- articles content -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3
      justify-items-center">
      {#each articles as article}
        <article
          class="shadow-border bg-white flex flex-col overflow-hidden max-w-md
          lg:max-w-none inner-focus">
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
              <h3 class="subline">{article.title}</h3>
            </header>
            <p class="py-6 flex-1">
              <span class="line-clamp-3">{article.description}</span>
            </p>

            <a
              class="py-3 text-brand-700 text-center flex space-x-3 items-center
              justify-center font-semibold border-t border-gray-200 group
              focus:ring-0 underline"
              href="/blog/{article.slug}">
              <span>Weiterlesen</span>
              <svg
                class="transition-transform duration-150 ease-in-out
                group-hover:translate-x-1 w-4 h-4 transform translate-y-px"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1
                  0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1
                  1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </article>
      {/each}
    </div>
  </AppPageWrapper>
{/if}
