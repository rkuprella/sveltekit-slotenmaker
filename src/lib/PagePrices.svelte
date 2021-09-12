<script>
  export let domain;
  import AppPageWrapper from "$lib/AppPageWrapper.svelte";
  import MarkdownIt from "markdown-it";
  const md = new MarkdownIt();
</script>

{#if domain.brand.prices}
  <AppPageWrapper>
    <div class="prose xl:prose-lg px-3">{domain.brand.prices.day}</div>
  </AppPageWrapper>
{/if}
