<script>
  export let title, image;
  // title, image
  import AppImage from "$lib/AppImage.svelte";
</script>

{#if title}
  <div class="px-6 py-12 bg-gray-100">
    {#if !image}
      <h1 class="text-4xl md:text-6xl font-bold text-center">{title}</h1>
    {/if}
    {#if image}
      <div class="container mx-auto relative">
        <div class="overflow-hidden h-80">
          <AppImage {image} lazy cover />
        </div>
        <div class="absolute inset-0 grid place-items-center">
          <h1
            class="px-6 py-3 bg-brand-50/80 border-4 border-white text-4xl
            md:text-6xl font-bold text-center">
            {title}
          </h1>
        </div>
      </div>
    {/if}
  </div>
{/if}
