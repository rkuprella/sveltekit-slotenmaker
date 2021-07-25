<script>
  export let phone;
  import { formatPhoneNumber } from "$lib/utils/formatNumbers.js";
</script>

<a
  href={formatPhoneNumber(phone)}
  class="transition duration-150 ease-in-out flex items-center pl-3 pr-6 py-3
  space-x-3 text-white rounded-lg shadow-xl bg-brand-700/90
  hover:bg-brand-600/90">
  <div>
    <svg
      class="w-12 h-12"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54
        1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0
        011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18
        2 5V3z" />
    </svg>
  </div>
  <div class="flex flex-col items-start flex-1">
    <span class="text-xl lg:text-3xl font-bold">{phone}</span>
    <span class="text-lg">
      <em>Jetzt anrufen</em>
    </span>
  </div>
</a>
