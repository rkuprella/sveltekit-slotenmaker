<script>
  export let phone;
  import AppPageWrapper from "$lib/AppPageWrapper.svelte";
  import PagePhoneButton from "$lib/PagePhoneButton.svelte";
</script>

<AppPageWrapper title="Jetzt anrufen" label="In 15 - 30 Minuten vor Ort">
  <div class="flex justify-center">
    <PagePhoneButton {phone} />
  </div>
</AppPageWrapper>
