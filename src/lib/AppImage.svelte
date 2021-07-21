<script>
  export let image,
    lazy = false,
    cover = false,
    top = false,
    bottom = false;
</script>

{#if image && image.file}
  <img
    src={image.file.url}
    width={image.file.width}
    height={image.file.height}
    alt={image.alt}
    loading={lazy ? 'lazy' : 'eager'}
    class="w-full {cover && 'object-cover h-full'}
    {top && 'object-top'}
    {bottom && 'object-bottom'}
    {!top && !bottom && 'object-cover'}" />
{/if}
