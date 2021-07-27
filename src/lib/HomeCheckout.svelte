<script>
  export let whatsappNumber, city;
  import AppImage from "$lib/AppImage.svelte";
  import {
    formatPhoneNumber,
    formatWhatsappNumber,
    formatWhatsappMessage
  } from "$lib/utils/formatNumbers.js";

  let selectedService = null;
  let services = [
    { id: 1, name: "- bitte Thema auswählen -" },
    { id: 2, name: "Ausgesperrt" },
    { id: 3, name: "Reparatur oder Einbruchspurenbeseitigung" },
    { id: 4, name: "Schlüssel nachmachen" },
    { id: 5, name: "Tresoröffnung" },
    { id: 6, name: "Gewerbliche Anfrage" }
  ];
  let message = "";
  $: whatsappMessage = city + " " + selectedService + ": " + message;
</script>

{#if whatsappNumber}
  <div class="md:hidden px-3 mt-20" id="whatsapp">
    <div
      class="shadow-border bg-whatsapp border-whatsapp relative mx-auto max-w-lg
      text-white">
      <div
        class="flex justify-center absolute top-0 inset-x-0 transform
        -translate-y-1/2">
        <div
          class="grid place-items-center w-12 h-12 flex-shrink-0 bg-whatsapp
          text-white rounded-full p-1">
          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0
              1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426
              0 0 1-.073-.215c0-.33.99-.945.99-1.49
              0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187
              0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032
              1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82
              2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515
              2.478-1.318.13-.33.244-.73.244-1.088 0-.058
              0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747
              0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0
              1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2
              15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8
              4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5
              27.176l5.974-1.92a10.807 10.807 0 0 0
              16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
              fill-rule="evenodd" />
          </svg>
        </div>
      </div>
      <div
        class="container mx-auto pt-12 pb-6 px-6 max-w-2xl space-y-6 bg-black/50">
        {#if !selectedService}
          <h3 class="headline text-white">WhatsApp Chat</h3>
          <p class="border-l-4 border-whatsapp pl-3 py-1">
            Thema auswählen, Felder ankreuzen und über WhatsApp abschicken.
            <strong class="font-bold">Wir antworten sofort!</strong>
          </p>
          <div class="space-y-3">
            <label class="sr-only" for="service">
              Wählen Sie das Thema aus, bei dem wir Ihnen helfen dürfen
            </label>
            <select bind:value={selectedService} name="service" id="service">
              {#each services as service}
                <option value={service.name}>{service.name}</option>
              {/each}
            </select>
          </div>
        {/if}
        {#if selectedService}
          <h3 class="headline text-white">{selectedService}</h3>
          <form action="" class="mt-6">
            <div>
              <div class="form-group">
                <input type="checkbox" id="car" />
                <label class="flex-1" for="car">Auto?</label>
              </div>
              <div class="form-group">
                <input type="checkbox" id="key" />
                <label class="flex-1" for="key">Schlüssel vorhanden?</label>
              </div>
              <!-- <div class="py-3">
                <label for="about" class="text-sm">
                  Ihre Nachricht an uns (optional)
                </label>
                <div class="">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    bind:value={message} />
                </div>
              </div> -->
            </div>
            <!-- whatsapp button -->
            <div class="flex justify-end space-x-3 mt-8">
              <button
                type="button"
                role="button"
                on:click={() => (selectedService = null)}
                class="text-white text-center flex items-center space-x-3 py-3
                font-semibold group px-3 rounded-lg bg-black/10 text-sm">
                <svg
                  class="transition-transform duration-150 ease-in-out
                  group-hover:-translate-x-1 w-4 h-4 transform translate-y-px
                  rotate-180 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1
                    1 0 01-1.414-1.414L14.586 11H3a1 1 0
                    110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
                <span>Zurück</span>
              </button>
              <a
                href={`https://api.whatsapp.com/send?phone=${formatWhatsappNumber(whatsappNumber)}&text=${formatWhatsappMessage(whatsappMessage)}`}
                class="bg-whatsapp shadow-border border-none text-white
                text-center flex items-center justify-center group
                overflow-hidden text-sm">
                <div
                  class="bg-white/80 px-3 flex items-center space-x-3 py-3
                  h-full text-green-800 font-semibold">
                  <span>Weiter zu WhatsApp</span>
                  <svg
                    class="transition-transform duration-150 ease-in-out
                    group-hover:translate-x-1 w-4 h-4 transform translate-y-px
                    flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6
                      6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0
                      110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
              </a>
            </div>
          </form>
        {/if}
      </div>
    </div>
  </div>
{/if}
