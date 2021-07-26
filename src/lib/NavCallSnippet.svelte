<script>
  export let phone, whatsappMessage, whatsappNumber;
  import {
    formatPhoneNumber,
    formatWhatsappMessage
  } from "$lib/utils/formatNumbers.js";
</script>

<div class="sr-only" id="contact-label">Kontaktinformationen</div>
<aside
  aria-labelledby="contact-label"
  class="fixed md:hidden flex items-center justify-between px-2 space-x-2
  bottom-0 inset-x-0 h-14 bg-gray-800 z-40">
  <!-- phone -->
  <a
    aria-labelledby="call-label"
    href={formatPhoneNumber(phone)}
    class="pl-1 pr-3 flex flex-1 items-center space-x-3 text-brand-100 py-2
    rounded-lg text-xl whitespace-nowrap truncate font-bold">
    <svg
      class="w-8 h-8 animate-ring"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54
        1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0
        011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18
        2 5V3z" />
    </svg>
    <span id="call-label">Jetzt anrufen</span>
  </a>
  <!-- 24/7 -->
  <div
    class="left-0 absolute top-0 right-16 text-sm transform -translate-y-1/2
    pr-2 flex space-x-2 items-center justify-center z-30 font-semibold
    pointer-events-none text-gray-300">
    <small
      class="flex items-center space-x-1 bg-gray-700 pl-0.5 pr-1.5 py-0.5
      rounded-full shadow-lg whitespace-nowrap">
      <svg
        class="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018
          18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
          clip-rule="evenodd" />
      </svg>
      <span>15 - 30 Min.</span>
    </small>
    <small
      class="flex items-center space-x-1 bg-gray-700 pl-0.5 pr-1.5 py-0.5
      rounded-full shadow-lg whitespace-nowrap">
      <svg
        class="w-5 h-5 text-green-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0
          00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clip-rule="evenodd" />
      </svg>
      <span>24 Std. täglich</span>
    </small>
  </div>

  <!-- whatsapp -->
  <div
    class="absolute bottom-0 mb-1 right-14 px-1 text-xs font-normal space-x-1
    flex items-center text-whatsapp pointer-events-none scale-90"
    aria-hidden="true">
    <span>... oder texten</span>
    <svg
      class="w-3 h-3 transform translate-y-px -rotate-45"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0
        01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0
        010-1.414z"
        clip-rule="evenodd" />
    </svg>
  </div>
  <a
    aria-label="Über WhatsApp kontaktieren"
    href={`https://api.whatsapp.com/send?phone=${formatPhoneNumber(whatsappNumber)}&amp;text=${formatWhatsappMessage(whatsappMessage)}`}
    class="relative z-30 grid place-items-center p-1 text-white rounded-full
    -mt-5 shadow-xl w-16 h-16 bg-whatsapp flex-shrink-0">
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0
        1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426
        0 0 1-.073-.215c0-.33.99-.945.99-1.49
        0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187
        0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06
        2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554
        4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515
        2.478-1.318.13-.33.244-.73.244-1.088 0-.058
        0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747
        0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0
        1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0
        4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0
        1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0
        16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
        fill-rule="evenodd" />
    </svg>
  </a>
</aside>
