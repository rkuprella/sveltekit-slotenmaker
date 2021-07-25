<script>
  export let content,
    intro = false;
  // content, image
  import AppImage from "$lib/AppImage.svelte";
  import AppImageAuthor from "$lib/AppImageAuthor.svelte";
  import MarkdownIt from "markdown-it";

  const md = new MarkdownIt();
  let items = [];
  if (Array.isArray(content)) {
    items = content;
  } else {
    items.push(content);
  }
</script>

{#if content}
  <div class="page-wrapper">
    <div class="container mx-auto">
      {#each items as item}
        <section
          class="flex odd:flex-row-reverse flex-wrap container justify-center
          items-center mx-auto py-8 space-y-12 md:space-y-0">
          <div class="w-full {item.image ? 'md:w-1/2' : ''}">
            <div class="prose xl:prose-lg px-6">
              {@html md.render(item.content)}
            </div>
          </div>
          {#if item.image}
            <div class="w-full md:w-1/2 px-6">
              <div
                class="relative md:max-w-[500px] mx-auto {intro ? '' : 'parallelogram border-4 border-brand-100'}">
                <AppImage image={item.image} cover lazy />
                {#if item.image.caption}
                  <div class="absolute inset-x-0 bottom-0 flex justify-center">
                    <div
                      class="bg-brand-200 transform -skew-x-12 font-semibold
                      text-gray-700 translate-y-1/2 px-6 py-4">
                      <div class="transform skew-x-12 italic text-center">
                        {item.image.caption}
                      </div>
                    </div>
                  </div>
                {/if}
                <AppImageAuthor
                  authorName={item.image.authorName}
                  authorAgency={item.image.authorAgency} />
              </div>
            </div>
          {/if}
        </section>
      {/each}
    </div>
  </div>
{/if}
