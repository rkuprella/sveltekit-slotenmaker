<script>
  export let title, image;
  // title, image
  import AppImage from "$lib/AppImage.svelte";
</script>

{#if title}
  <div class="px-6 py-12 bg-gray-100">
    <h1 class="text-4xl md:text-6xl font-bold text-center">{title}</h1>
    {#if image}
      <AppImage {image} />
    {/if}
  </div>
{/if}
