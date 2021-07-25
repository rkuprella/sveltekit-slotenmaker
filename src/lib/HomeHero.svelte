<script>
  export let hero,
    phone,
    whatsappNumber,
    whatsappMessage,
    reviewContent,
    service;
  // title, label, bullets, image // totalStars, totalReviews, link, reviews (name, stars, text, positive, avatar)
  import AppImage from "$lib/AppImage.svelte";
  import PagePhoneButton from "$lib/PagePhoneButton.svelte";
  import PageWhatsappButton from "$lib/PageWhatsappButton.svelte";
  import AppReviewSnippet from "$lib/AppReviewSnippet.svelte";
  let bullets = hero.bullets.split(",");
</script>

{#if hero}
  <div class="bg-brand-100 relative h-1/2 flex flex-col justify-end">
    <!-- skyline -->
    <div class="opacity-40 overflow-hidden absolute w-full">
      <AppImage image={hero.image} />
    </div>
    <!-- polygon shape -->
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 918 39.5"
      class="absolute inset-x-0 bottom-0 pointer-events-none text-white">
      <polyline points="459,39.5 0,39.5 0,0 " />
      <polyline points="459,39.5 918,39.5 918,0 " />
    </svg>
    <!-- hero content -->
    <div
      class="relative text-brand-main max-w-4xl xl:max-w-6xl mx-auto py-12
      md:py-20 xl:py-32 w-full">
      <div
        class="container mx-auto px-6 flex flex-col space-y-6 justify-center
        h-full items-center md:items-start pb-8">
        <header class="space-y-3">
          <h1 class="text-3xl md:text-6xl font-bold text-center md:text-left">
            {hero.title}
          </h1>
          {#if hero.label}
            <div class="subline text-center md:text-left">{hero.label}</div>
          {/if}
        </header>
        <ul class="space-y-2">
          {#each bullets as bullet}
            <li class="flex space-x-2 items-center">
              <svg
                class="w-6 h-6 text-brand-600 transform translate-y-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1
                  1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-lg md:text-xl">{bullet}</span>
            </li>
          {/each}
        </ul>
        <div class="space-y-3">
          <PagePhoneButton {phone} />
          <PageWhatsappButton {whatsappNumber} {whatsappMessage} />
        </div>
      </div>
      <!-- google review snippet -->
      {#if reviewContent}
        <div
          class="hidden md:flex justify-end absolute bottom-0 inset-x-0
          pointer-events-none">
          <div class="w-1/2 flex justify-center transform translate-y-20">
            <AppReviewSnippet {reviewContent} {service} />
          </div>
        </div>
      {/if}
    </div>
  </div>
  <!-- google review snippet mobile -->
  {#if reviewContent}
    <div class="relative flex justify-center px-6 -mt-12 md:hidden">
      <AppReviewSnippet {reviewContent} {service} />
    </div>
  {/if}
{/if}
