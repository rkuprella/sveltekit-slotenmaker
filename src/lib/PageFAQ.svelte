<script>
  export let faq;
  // question, answer
</script>

{#if faq}
  <div class="page-wrapper bg-gray-100 relative">
    <!-- polygon shape -->
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 918 39.5"
      class="absolute inset-x-0 bottom-0 pointer-events-none text-white">
      <polyline points="459,39.5 0,39.5 0,0 " />
      <polyline points="459,39.5 918,39.5 918,0 " />
    </svg>
    <!-- faq -->
    <div class="container mx-auto pt-8 pb-16 space-y-12">
      <header class="md:text-center px-6">
        <h3 class="headline flex space-x-2 items-center md:justify-center px-6">
          <svg
            class="w-10 h-10 md:w-14 md:h-14 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0
              11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2
              0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd" />
          </svg>
          <span>Häufig gestellte Fragen</span>
        </h3>
      </header>

      <div class="space-y-3 px-3 max-w-2xl mx-auto">
        {#each faq as item}
          <details class="shadow-border bg-white md:text-lg">
            <summary class="font-semibold py-3 px-6 cursor-pointer">
              {item.question}
            </summary>
            <p class="text-brand-main pb-5 pt-2 leading-7 px-6">
              {item.answer}
            </p>
          </details>
        {/each}
      </div>
    </div>
  </div>
{/if}
