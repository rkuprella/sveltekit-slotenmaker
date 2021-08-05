<script>
  let logos = ["ABUS", "Winkhaus", "BKS", "KABA", "Wilka", "EVVA"];
  let bullets = [
    "Regelmäßig geschulte Monteure",
    "Vollständige Sicherheitschecks für Ihr Zuhause",
    "Installation, Reparatur und Wartung von Sicherheitssystemen",
    "Ihr zuverlässiger Partner für Sicherheit & Einbruchschutz"
  ];
</script>

<div class="relative md:bg-gray-900 my-8 md:my-0 py-8 md:py-16">
  <!-- shapes -->
  <div
    class="absolute inset-0 transform -skew-y-3 mx-6 -mt-3 -mb-3 bg-brand-500/20
    z-[-1] md:hidden" />
  <div
    class="absolute inset-0 transform skew-y-3 bg-gray-900 z-[-1] md:hidden" />
  <!-- banner content -->
  <div
    class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-3 py-8
    md:py-0">
    <div
      class="flex space-x-3 lg:space-x-6 items-center justify-start
      xl:justify-center py-3">
      <div class="w-20 md:w-28 lg:w-36">
        <img src="/img/TrustedSecurity.png" alt="Trusted Security Logo" />
      </div>
      <div>
        <div class="uppercase lg:text-xl tracking-wide text-blue-200">
          Trusted Security
        </div>
        <div
          class="relative inline-block text-3xl lg:text-5xl font-bold
          text-blue-300">
          <span>Partner</span>
          <svg
            class="absolute -bottom-4 -right-12 w-12 h-12 lg:-bottom-6
            lg:-right-16 lg:w-16 lg:h-16 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0
              011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
    <div class="py-6">
      <ul>
        {#each bullets as bullet}
          <li class="flex space-x-3 text-blue-100 py-1">
            <svg
              class="w-8 h-8 lg:w-12 lg:h-12 flex-shrink-0"
              fill="url(#gradient)"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%">
                  <stop offset="0%" style="stop-color:#fff;stop-opacity:1" />
                  <stop
                    offset="50%"
                    style="stop-color:#bedaed;stop-opacity:1" />
                  <stop
                    offset="51%"
                    style="stop-color:#7a97ab;stop-opacity:1" />
                  <stop
                    offset="100%"
                    style="stop-color:#bedaed;stop-opacity:1" />
                </linearGradient>
              </defs>
              <path
                fill-rule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0
                0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8
                11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541
                3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414
                1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            <span class="text-lg pt-1 lg:pt-2.5 font-normal">{bullet}</span>
          </li>
        {/each}
      </ul>
    </div>
    <div
      class="pt-10 border-t-2 border-white/10 md:col-span-2 grid grid-cols-3
      md:grid-cols-6 place-items-center">
      {#each logos as logo}
        <div
          class="grid place-items-center h-16 w-16 md:w-20 opacity-80
          hover:opacity-100 transition-opacity duration-150 ease-in-out">
          <img title={logo} src="/img/{logo}_Logo.svg" alt="{logo} Logo" />
        </div>
      {/each}
    </div>
  </div>

</div>
