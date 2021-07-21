<script>
  export let authorName,
    authorAgency,
    authorLink,
    left = false;
</script>

{#if authorName}
  <div
    class="absolute top-0 {left ? 'left-0' : 'right-0'} px-1 py-0.5 text-white
    text-xs italic bg-gray-900/25 opacity-40 hover:opacity-100
    transition-opacity duration-100 rounded-sm ease-in-out z-30"
    aria-hidden="true">
    {#if authorLink}
      <a href={authorLink} class="underline" target="_blank">
        &copy; {authorName}
        {#if authorAgency}
          <span>- {authorAgency}</span>
        {/if}
      </a>
    {:else}
      <div>
        &copy; {authorName}
        {#if authorAgency}
          <span>- {authorAgency}</span>
        {/if}
      </div>
    {/if}
  </div>
{/if}
