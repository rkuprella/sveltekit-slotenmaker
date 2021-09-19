<script>
  export let domain;
  import AppPageWrapper from "$lib/AppPageWrapper.svelte";
  import MarkdownIt from "markdown-it";
  const md = new MarkdownIt();
</script>

{#if domain.brand.imprint}
  <AppPageWrapper>
    <div>
      <h2 class="font-bold text-2xl mb-6">Angaben gemäß § 5 TMG</h2>
      <ul>
        <li>{domain.brand.service} {domain.brand.name}</li>
        <li class="mt-4">
          <strong>Vertreten durch:</strong>
          {domain.brand.imprint.owner}
        </li>
        <li>{domain.brand.imprint.address.street}</li>
        <li>
          {domain.brand.imprint.address.zip} {domain.brand.imprint.address.city}
        </li>
        <li>StId.-Nr.: {domain.brand.imprint.vat}</li>
        <li class="mt-4">Telefon: {domain.brand.imprint.address.phone}</li>
      </ul>

    </div>
    <div class="prose xl:prose-lg px-3">
      {@html md.render(domain.brand.imprint.content)}
    </div>
  </AppPageWrapper>
{/if}
