<script>
  export let articles;
  // title, description, content, publishingDate, image, slug
  import AppImage from "$lib/AppImage.svelte";
  import AppImageAuthor from "$lib/AppImageAuthor.svelte";
  import { formatDate } from "$lib/utils/formatNumbers.js";
</script>

{#if articles}
  <div class="page-wrapper">
    <div class="container mx-auto space-y-12 py-8">
      <div class="px-6 flex flex-col items-start md:items-center">
        <h3 class="subline text-center">Aus unserem Blog</h3>
        <a
          href="/blog"
          class="underline text-lg text-center py-2 md:text-xl text-brand-700">
          Alle Beiträge
        </a>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3
        justify-items-center">
        {#each articles as article}
          <article
            class="shadow-border bg-gray-100 flex flex-col overflow-hidden
            max-w-md inner-focus">
            <div class="relative h-48">
              <AppImage image={article.image} cover top lazy />
              <AppImageAuthor
                authorName={article.image.authorName}
                authorAgency={article.image.authorAgency} />
            </div>
            <div class="px-6 flex-1 flex flex-col">
              <header class="pt-6">
                <div class="text-gray-600 uppercase text-sm">
                  {formatDate(article.publishingDate)}
                </div>
                <h4 class="subline">{article.title}</h4>
              </header>
              <p class="py-6 flex-1">
                <span class="line-clamp-3">{article.description}</span>
              </p>

              <a
                class="py-3 text-brand-700 text-center flex space-x-3
                items-center justify-center font-semibold border-t
                border-gray-200 group focus:ring-0"
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
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1
                    1 0 01-1.414-1.414L14.586 11H3a1 1 0
                    110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </div>
{/if}
