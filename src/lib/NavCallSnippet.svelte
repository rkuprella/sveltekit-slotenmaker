<script>
  export let phone, whatsappMessage, whatsappNumber;
  import {
    formatPhoneNumber,
    formatWhatsappMessage
  } from "$lib/utils/formatNumbers.js";
</script>

<nav
  class="fixed md:hidden flex items-center px-2 space-x-1 bottom-0 inset-x-0
  h-14 bg-gray-300">
  <a
    href={formatPhoneNumber(phone)}
    class="flex-1 px-2 flex items-center space-x-3 text-brand-headline h-full">
    <div>
      <svg
        class="w-8 h-8 animate-ring"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54
          1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0
          011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2
          12.18 2 5V3z" />
      </svg>
    </div>
    <span class="text-xl sm:text-2xl font-bold">{phone}</span>
  </a>
  <a
    href={`https://api.whatsapp.com/send?phone=${formatPhoneNumber(whatsappNumber)}&amp;text=${formatWhatsappMessage(whatsappMessage)}`}
    class="grid place-items-center p-1 text-white rounded-full -mt-5 shadow-xl
    w-16 h-16 bg-[#4dc247]">
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
</nav>
