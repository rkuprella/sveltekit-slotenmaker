<script>
  export let domain;
  import AppPageWrapper from "$lib/AppPageWrapper.svelte";
  import PageContent from "$lib/PageContent.svelte";
</script>

{#if domain.aboutContent}
  <PageContent content={domain.aboutContent.content} />
{/if}
