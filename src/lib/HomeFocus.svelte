<script>
  export let focus, phone;
  // title, label, content, imageLeft, imageRight
  import AppImage from "$lib/AppImage.svelte";
  import AppImageAuthor from "$lib/AppImageAuthor.svelte";
  import PagePhoneButton from "$lib/PagePhoneButton.svelte";
  import MarkdownIt from "markdown-it";

  const md = new MarkdownIt();
</script>

{#if focus}
  <div class="bg-brand-100 relative">
    <!-- images -->
    <div class="grid grid-cols-2 absolute inset-0 h-full overflow-hidden">
      <!-- spacer needed for small breakpoints -->
      <div class="h-full">
        <div class="relative hidden lg:block h-full">
          <AppImage image={focus.imageLeft} cover lazy />
          <AppImageAuthor
            authorName={focus.imageLeft.authorName}
            authorAgency={focus.imageLeft.authorAgency}
            left />
        </div>
      </div>
      <div class="relative h-full">
        <AppImage image={focus.imageRight} cover lazy />
        <AppImageAuthor
          authorName={focus.imageRight.authorName}
          authorAgency={focus.imageRight.authorAgency} />
      </div>
    </div>
    <!-- gradients -->
    <div class="absolute inset-0 h-full w-full mx-auto grid grid-cols-6">
      <div
        class="bg-gradient-to-r from-transparent to-brand-100 hidden lg:block
        col-span-2" />
      <div class="bg-brand-100 col-span-4 md:col-span-3 lg:col-span-2" />
      <div
        class="bg-gradient-to-l col-span-2 md:col-span-3 lg:col-span-2
        from-transparent to-brand-100" />
    </div>
    <!-- focus content -->
    <section
      class="relative w-full sm:w-3/5 lg:w-2/5 lg:mx-auto px-6 pt-20 lg:pt-32
      pb-28 lg:pb-40 flex flex-col items-start lg:items-center space-y-6">
      <header class="lg:text-center">
        <h2 class="headline">{focus.title}</h2>
        <div
          class="text-lg inline-block px-4 py-2 md:text-xl font-semibold
          text-brand-700 link-active">
          {focus.label}
        </div>
      </header>
      <div class="pr-12 sm:pr-0">
        {@html md.render(focus.content)}
      </div>
      <PagePhoneButton {phone} />
    </section>
    <!-- polygon shape -->
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 918 39.5"
      class="absolute inset-x-0 bottom-0 pointer-events-none text-white">
      <polyline points="459,39.5 0,39.5 0,0 " />
      <polyline points="459,39.5 918,39.5 918,0 " />
    </svg>
  </div>
{/if}
