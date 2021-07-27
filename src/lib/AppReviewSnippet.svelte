<script>
  export let reviewContent, service;
  import AppStars from "$lib/AppStars.svelte";
  import { formatDecimal } from "$lib/utils/formatNumbers.js";
</script>

<div
  class="shadow-border bg-gray-100 px-3 pb-4 pointer-events-auto flex flex-col
  items-center space-y-3 inner-focus">
  <div
    class="text-sm flex items-center space-x-1 border-b border-gray-200 py-3
    px-3">
    <svg
      class="w-6 h-6 text-green-600 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066
        3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723
        1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0
        01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066
        3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0
        00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066
        3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707
        9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clip-rule="evenodd" />
    </svg>
    <span class="text-green-700">
      Verifizierte
      <strong>Google Bewertungen</strong>
    </span>
  </div>
  <svg
    class="w-20 h-20 text-blue-600 mx-auto"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147
      1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72
      8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0
      12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173
      8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667
      0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
  <AppStars totalStars={reviewContent.totalStars} />
  <div class="space-y-1 text-center">
    <div class="text-gray-700 py-1 font-semibold text-xl">{service}</div>
    <div class="text-xl font-semibold tracking-wide" />
    <div class="text-sm">
      <strong>{formatDecimal(reviewContent.totalStars)}</strong>
      von 5,0 aus
      <strong>{reviewContent.totalReviews}</strong>
      echten
      <br />
      Google Bewertungen
    </div>
  </div>
  <a
    href="#reviews"
    class="px-2 py-3 text-brand-700 text-center flex space-x-3 items-center
    justify-center group focus:ring-0 underline">
    <span>Zu den Bewertungen</span>
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
  </a>
</div>
