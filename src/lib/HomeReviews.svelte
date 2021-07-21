<script>
  export let reviewContent;
  // totalStars, totalReviews, link, reviews (name, stars, text, positive, avatar)
  import AppStars from "$lib/AppStars.svelte";
</script>

<div class="relative page-wrapper space-y-12 bg-blue-100">
  <!-- polygon shape -->
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 918 39.5"
    class="absolute inset-x-0 bottom-0 pointer-events-none text-white">
    <polyline points="459,39.5 0,39.5 0,0 " />
    <polyline points="459,39.5 918,39.5 918,0 " />
  </svg>
  <!-- title -->
  <div class="container mx-auto flex flex-col md:items-center space-y-3 px-6">
    <h3 class="headline flex space-x-2 items-center md:justify-center">
      <svg
        class="w-10 h-10 md:w-14 md:h-14 text-green-600 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0
          3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304
          1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745
          3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0
          01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812
          3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0
          00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0
          00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0
          001.414 0l4-4z"
          clip-rule="evenodd" />
      </svg>
      <span>Das sagen unsere Kunden</span>
    </h3>
  </div>
  <!-- reviews -->
  <div
    id="reviews"
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 container
    mx-auto pb-16 px-3">
    {#each reviewContent.reviews as review}
      <blockquote
        class="shadow-border bg-gray-100 flex flex-col space-y-6 pt-6 px-6">
        <header class="flex space-x-3">
          <div class="grid place-items-center">
            {#if review.avatar}
              <img
                class="w-10 h-10 rounded-full overflow-hidden"
                src={review.avatar.url}
                width={review.avatar.width}
                height={review.avatar.height}
                alt="Avatar von {review.name}" />
            {:else}
              <div
                class="w-10 h-10 rounded-full grid place-items-center
                bg-gray-300 text-white text-2xl text-center">
                <span>{review.name.charAt(0)}</span>
              </div>
            {/if}
          </div>
          <div class="flex flex-col justify-center space-y-1">
            <div class="font-semibold">{review.name}</div>
            <AppStars totalStars={review.stars} small />
          </div>
        </header>
        <p class="prose flex-1">{review.text}</p>
        <div
          class="flex items-center justify-center space-x-2 border-t
          border-gray-200 px-2 py-3">
          <svg
            class="w-6 h-6 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0
              3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304
              1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723
              1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723
              3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0
              01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976
              3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44
              5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414
              1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>
          <small class="text-green-700">Verifizierte Google Bewertung</small>
        </div>
      </blockquote>
    {/each}
  </div>
</div>
