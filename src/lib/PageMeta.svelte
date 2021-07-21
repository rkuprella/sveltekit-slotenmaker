<script>
  export let title = undefined;
  export let description = undefined;
  export let image = undefined;
  export let url = undefined;
  export let siteUrl = undefined;
  export let logo = undefined;
  export let search = undefined;
  export let sitemap = undefined;
  export let openGraph = {
    title,
    description,
    ...(url ? { url } : {})
  };
  export let robots = "index,follow";
  const jsonLd = content =>
    `<${"script"} type="application/ld+json">${JSON.stringify(
      content
    )}</${"script"}>`;
  $: {
    if (!!image && typeof image === "string") {
      openGraph = { image, ...openGraph };
    }
    if (typeof image === "object") {
      openGraph = {
        image: image.url,
        "image:width": image.width,
        "image:height": image.height,
        "image:alt": image.alt || title,
        ...openGraph
      };
    }
  }
</script>

<svelte:head>
  <meta name="robots" content={robots} />

  {#if title}
    <title>{title}</title>
    <meta name="title" content={title} />
  {/if}

  {#if description}
    <meta name="description" content={description} />
  {/if}

  {#each Object.keys(openGraph) as tag}
    <meta property="og:{tag}" content={openGraph[tag]} />
  {/each}

  {#if !!url}
    <link rel="canonical" href={url} />
  {/if}

  {#if sitemap}
    <link rel="sitemap" type="application/xml" href={sitemap} />
  {/if}

  {#if !!siteUrl}
    {@html jsonLd({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      url: siteUrl,
      logo: logo || ''
    })}

    {@html jsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: siteUrl,
      ...(!!search
        ? {
            potentialAction: {
              '@type': 'SearchAction',
              target: { searchUrl: `${search}?q={search_term_string}` },
              'query-input': 'required name=search_term_string'
            }
          }
        : {})
    })}
  {/if}
</svelte:head>
