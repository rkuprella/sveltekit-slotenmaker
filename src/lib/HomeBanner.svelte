<script>
  export let banner;
  // title, bullets, image
  import AppImage from "$lib/AppImage.svelte";
</script>

{#if banner}
  <div class="page-wrapper bg-blue-600">
    {#each banner as item}
      <h3>{item.title}</h3>
      <div>{item.bullets}</div>
      <AppImage image={item.image} />
    {/each}
  </div>
{/if}
