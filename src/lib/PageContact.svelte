<script>
  export let domain;
  import AppPageWrapper from "$lib/AppPageWrapper.svelte";
  import PagePhoneButton from "$lib/PagePhoneButton.svelte";
</script>

<AppPageWrapper>
  <div>
    <h3 class="font-bold text-2xl mb-6">Wir sind für Sie da</h3>
    <p>
      Wenn Sie einen Schlüsseldienst brauchen, rufen Sie uns an. Wenn Sie Fragen
      zu unseren Leistungen oder Preisen haben, rufen Sie uns an oder schreiben
      Sie uns eine Email. Wir beantworten Emails in der Regel innerhalb von
      einem Werktag.
    </p>
    <div class="py-12 flex justify-start">
      <PagePhoneButton phone={domain.address.phone} />
    </div>
    <ul>
      <li>
        <strong>{domain.brand.service} {domain.brand.name}</strong>
      </li>
      <li>Email: {domain.brand.imprint.email}</li>
    </ul>
  </div>

</AppPageWrapper>
