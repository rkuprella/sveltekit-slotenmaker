<script>
  export let title, image;
  // title, image
  import AppImage from "$lib/AppImage.svelte";
</script>

{#if title}
  <div class="p-8">
    <h1>{title}</h1>
    <AppImage {image} />
  </div>
{/if}
