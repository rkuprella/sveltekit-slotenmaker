<script>
  export let whatsappNumber;
</script>

{#if whatsappNumber}
  <a
    href="#whatsapp"
    class="bg-whatsapp shadow-border border-none text-white flex items-center
    justify-center group overflow-hidden text-sm md:hidden">
    <div
      class="grid place-items-center w-10 h-10 ml-1 mr-0.5 flex-shrink-0
      rounded-full">
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
    </div>
    <div class="bg-black/40 px-3 flex items-center space-x-3 py-3 h-full">
      <span>Über WhatsApp kontaktieren</span>
      <svg
        class="transition-transform duration-150 ease-in-out
        group-hover:translate-x-1 w-4 h-4 transform translate-y-px"
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
  </a>
{/if}
