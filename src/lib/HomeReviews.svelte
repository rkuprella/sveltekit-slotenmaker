<script>
  export let reviewContent;
  // totalStars, totalReviews, link, reviews (name, stars, text, positive, avatar)
  import AppPageWrapper from "$lib/AppPageWrapper.svelte";
  import AppStars from "$lib/AppStars.svelte";
</script>

{#if reviewContent}
  <AppPageWrapper
    polygon
    title="Das sagen unsere Kunden"
    label="Verifizierte Kundenbewertungen">
    <svg
      slot="icon"
      class="w-12 h-12 text-green-600"
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
    <!-- reviews -->
    <div
      id="reviews"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pb-16
      justify-items-center">
      {#each reviewContent.reviews as review}
        <section
          class="shadow-border bg-white flex flex-col space-y-6 pt-6 px-6
          max-w-md lg:max-w-none">
          <header class="relative">
            <svg
              class="absolute top-1/2 transform -translate-y-1/2 right-0
              text-gray-500/10 w-16 h-16 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              viewBox="0 0 24 24">
              <path
                d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457
                6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145
                4.247-5.621c-.537.278-1.24.375-1.929.311c-1.804-.167-3.226-1.648-3.226-3.489a3.5
                3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447
                7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03
                8.188l-.893-1.378c3.335-1.804 3.987-4.145
                4.247-5.621c-.537.278-1.24.375-1.929.311C4.591 12.322 3.17
                10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748
                1.179z"
                fill="currentColor" />
            </svg>
            <div class="flex space-x-3">
              <div class="grid place-items-center">
                {#if review.avatar}
                  <img
                    class="w-10 h-10 rounded-full overflow-hidden"
                    src={review.avatar.url}
                    width={review.avatar.width}
                    height={review.avatar.height}
                    alt="Avatar von {review.name}"
                    loading="lazy" />
                {:else}
                  <div
                    class="w-10 h-10 rounded-full grid place-items-center
                    bg-gray-200 text-gray-600 text-2xl text-center">
                    <span>{review.name.charAt(0)}</span>
                  </div>
                {/if}
              </div>
              <div class="flex flex-col justify-center space-y-1">
                <div class="font-semibold">{review.name}</div>
                <AppStars totalStars={review.stars} small />
              </div>
            </div>
          </header>
          <blockquote class="text-gray-600 flex-1">
            <p>{review.text}</p>
          </blockquote>
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
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976
                0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812
                2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066
                3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0
                00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0
                00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0
                00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745
                3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9
                10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            <small class="text-green-700">Verifizierte Google Bewertung</small>
          </div>
        </section>
      {/each}
    </div>
  </AppPageWrapper>
{/if}
