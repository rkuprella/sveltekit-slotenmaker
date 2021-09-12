<script>
  export let title = null,
    label = null,
    polygon = false;
  // slots for icon and link
</script>

<div class="py-16 md:py-28 xl:py-36 relative {polygon && 'bg-gray-100'}">
  <!-- polygon shape -->
  {#if polygon}
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 918 39.5"
      class="absolute inset-x-0 bottom-0 pointer-events-none text-white">
      <polyline points="459,39.5 0,39.5 0,0 " />
      <polyline points="459,39.5 918,39.5 918,0 " />
    </svg>
  {/if}
  <div class="container mx-auto space-y-8 md:space-y-12 px-3">
    {#if title || label}
      <div class="flex flex-col items-start md:items-center px-3">
        {#if title}
          <div class="flex items-center space-x-2">
            <slot name="icon" />
            <h2 class="headline">{title}</h2>
          </div>
        {/if}
        {#if label}
          <div
            class="text-lg flex items-center px-4 py-2 md:text-xl font-semibold
            text-brand-700 link-active">
            <span>{label}</span>
          </div>
        {/if}
        <slot name="link" />
      </div>
    {/if}
    <slot />
  </div>
</div>
