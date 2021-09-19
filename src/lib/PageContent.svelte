<script>
  export let content,
    intro = false,
    outro = false,
    phone;
  // content, image
  import AppPageWrapper from "$lib/AppPageWrapper.svelte";
  import AppImage from "$lib/AppImage.svelte";
  import AppImageAuthor from "$lib/AppImageAuthor.svelte";
  import AppImageCaption from "$lib/AppImageCaption.svelte";
  import MarkdownIt from "markdown-it";
  import PagePhoneButton from "$lib/PagePhoneButton.svelte";

  const md = new MarkdownIt();
  let items = [];
  if (Array.isArray(content)) {
    items = content;
  } else {
    items.push(content);
  }
</script>

{#if content}
  <AppPageWrapper>
    {#each items as item}
      <section
        class="flex odd:flex-row-reverse flex-wrap container justify-center
        items-center mx-auto py-8 space-y-12 md:space-y-0">
        <div class="w-full {item.image ? 'md:w-1/2' : ''}">
          <!-- <div class="prose xl:prose-lg px-3">
            {@html md.render(item.content)}
          </div> -->

          {#each item.content as content}
            <div>
              <pre>{content}</pre>
            </div>
          {/each}

          {#if outro}
            <div class="py-12 flex justify-start">
              <PagePhoneButton {phone} />
            </div>
          {/if}
        </div>
        {#if item.image}
          <div class="w-full md:w-1/2 px-6">
            <div
              class="relative md:max-w-[500px] mx-auto {intro ? '' : 'parallelogram border-4 border-brand-100'}">
              <AppImage image={item.image} cover lazy />
              <AppImageCaption caption={item.image.caption} />
              <AppImageAuthor
                authorName={item.image.authorName}
                authorAgency={item.image.authorAgency} />
            </div>
          </div>
        {/if}
      </section>
    {/each}
  </AppPageWrapper>
{/if}
