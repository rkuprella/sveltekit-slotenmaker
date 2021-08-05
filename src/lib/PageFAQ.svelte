<script>
  export let faq;
  // question, answer
  import AppPageWrapper from "$lib/AppPageWrapper.svelte";
</script>

{#if faq}
  <AppPageWrapper polygon title="Häufig gestellte Fragen">
    <svg
      slot="icon"
      class="w-12 h-12 text-gray-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0
        11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0
        011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
        clip-rule="evenodd" />
    </svg>
    <!-- faq -->
    <div class="space-y-3 max-w-2xl mx-auto">
      {#each faq as item}
        <details class="shadow-border bg-white md:text-lg">
          <summary class="font-semibold py-3 px-6 cursor-pointer">
            {item.question}
          </summary>
          <p class="text-brand-main pb-3 pt-2 leading-7 px-6">
            <strong>Antwort:</strong>
            {item.answer}
          </p>
        </details>
      {/each}
    </div>
  </AppPageWrapper>
{/if}
