<script>
  export let domain;
  import AppPageWrapper from "$lib/AppPageWrapper.svelte";
</script>

<AppPageWrapper>
  <div>
    <h2 class="font-bold text-2xl mb-6">Kontakt</h2>
    <ul>
      <li>{domain.brand.service} {domain.brand.name}</li>
      <li class="mt-4">Telefon: {domain.brand.imprint.address.phone}</li>
      <li class="mb-12">Email: {domain.brand.imprint.email}</li>
    </ul>
    <h3 class="font-bold text-2xl mb-6">Wir sind für Sie da</h3>
    <p>
      Wenn Sie einen Schlüsseldienst brauchen, rufen Sie uns an. Wenn Sie Fragen
      zu unseren Leistungen oder Preisen haben, rufen Sie uns an oder schreiben
      Sie uns eine Email. Wir beantworten Emails in der Regel innerhalb von
      einem Werktag.
    </p>
  </div>
</AppPageWrapper>
