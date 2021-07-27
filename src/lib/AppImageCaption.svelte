<script>
  export let caption, gallery;
</script>

{#if caption}
  <div class="absolute inset-x-0 bottom-0 flex justify-center">
    <div
      class="bg-brand-100 transform -skew-x-12 font-semibold text-gray-800
      translate-y-1/2 px-6 py-4 {gallery && 'lg:-ml-2 lg:mr-16'}">
      <div class="transform skew-x-12 italic text-center">{caption}</div>
    </div>
  </div>
{/if}
