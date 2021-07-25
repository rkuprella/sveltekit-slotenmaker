<script>
  export let authorName,
    authorAgency,
    left = false;
</script>

{#if authorName}
  <div
    class="absolute top-0 {left ? 'left-0' : 'right-0'} px-1 py-0.5 text-white
    text-xs italic bg-gray-900/60 rounded-sm z-20"
    aria-hidden="true">
    <div>
      &copy; {authorName}
      {#if authorAgency}
        <span>/ {authorAgency}</span>
      {/if}
    </div>
  </div>
{/if}
