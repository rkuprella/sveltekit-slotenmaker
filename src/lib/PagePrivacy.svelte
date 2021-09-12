<script>
  export let domain;
  import AppPageWrapper from "$lib/AppPageWrapper.svelte";
  import MarkdownIt from "markdown-it";
  const md = new MarkdownIt();
</script>

{#if domain.brand.privacy}
  <AppPageWrapper>
    <div class="prose xl:prose-lg px-3">
      {@html md.render(domain.brand.privacy.content)}
    </div>
  </AppPageWrapper>
{/if}
